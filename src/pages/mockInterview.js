import React, { Component, useState, useEffect } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder';
import { API } from 'aws-amplify';
import { listQuestions} from '../graphql/queries';
import styled from "styled-components";
import axios from 'axios';



const RunButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  width: 100px;
  height: 50px;
  padding: 5px 15px;
  border-radius: 8px;
  color: var(--btntxtcolor);
  text-align: center;
  font-size: 13px;
  font-family: "Lucida Console", "Courier New", monospace;
  float: left;
  margin-right: 1rem;
`

const MockInterview = () => {

  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionList, setQuestionList] = useState(null);
  const [recorded, setRecorded] = useState(false)
  const [submmited, setSubmmited] = useState(false);
  const [upper_loud, set_upper_loud] = useState("0");
  const [lower_loud, set_lower_loud] = useState("0");
  const [speechToText, SetSpeechToText] = useState("");
  const [aiResponse, SetAIResponse] = useState("");
  var disp_vid, disp_time, disp_start_stop, disp_sbmt, disp_fdbck;
  const [loading, setLoading] = useState(false);

  const input_variables = {
    filter:{
        type: 
        {
            gt: 1
        }
    }
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: true,
    audio: true,
    echoCancellation: true,
    mimeType: "audio/wav"
  });
  console.log("mediaBlobUrl: ", mediaBlobUrl);
  
  const getNextQuestion = () => {
    let nextIndex = questionIndex + 1;
    setRecorded(false);
    setSubmmited(false);
    if (nextIndex == questionList.length) {
      setQuestionIndex(0);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  }

  const questionStart = () => {
    API.graphql({
      query: listQuestions, variables: input_variables
    }).then(response => {
      let arr = response.data.listQuestions.items;
      setQuestionList(arr);
    }).catch(error => {
      console.log("Error in mockinterview.js, inside graphql query: ", error)
    });
  }

  const handleSubmit = () => {
    fetch(mediaBlobUrl)
    .then((response) => response.blob())
    .then(async (blob) => {
      const audioFile = new File([blob], 'audiodata.webm', { type: 'audio/webm' });
      const formData = new FormData();
      setLoading(true);
      formData.append("audiodata", audioFile, "audiodata.webm");
      formData.append("question", questionList[questionIndex].prompt)
      try {
          const response = await axios({
              method: "post",
              url: "https://flask-service.8ac5gsv5hb4sm.us-east-2.cs.amazonlightsail.com/opensmileaudio",
              data: formData,
              headers: {"Content-Type": "multipart/form-data"}
          })
          console.log(response.data);
          set_upper_loud(response.data.upper_loud);
          set_lower_loud(response.data.lower_loud);
          SetSpeechToText(response.data.speech_to_text);
          SetAIResponse(response.data.ai_response.choices[0].message.content);
          setSubmmited(true);
          setLoading(false);
      } catch(error) {
          console.log(error);
      }
    });
  }

  if(mediaBlobUrl !== undefined){
    disp_vid = (<div class="video-container">
        <video class = "video"  src={mediaBlobUrl} controls loop />
      </div>)

    disp_fdbck = (<div class = "mck-interview-fdbck-container">        
      <div class = "mck-interview-feedback">
        <div class="loudness-fdbck">
          <h4>
            { loading &&
              "Feedback Loading, Please wait"
            }
          </h4>

          <h4>{(upper_loud > 6.5 && submmited) &&
              "Your volume may be too loud"
          }</h4>

            <h4>{(upper_loud < 3 && submmited) &&
                "Your volume may be too quiet"
            }</h4>
          <h4>{submmited &&
            "What you said: " + speechToText
          }</h4>
        </div>

        <div class= "ai-fdbck">
          <h4>{submmited &&
            "Feedback: " + aiResponse
          }</h4>
        </div>
 
      </div>
    </div>)
  }

  if(questionList !== null){
    if(isActive){
      disp_start_stop = (    
         <h3> Press Stop to end recording </h3>
        )
    } else {
      disp_start_stop = (
      <h3> Press Start to record </h3> )
    }
  }

  if(isActive){
    disp_time = (<div class="mck-interview-time">
      <span >{minute}</span>
      <span>:</span>
      <span >{second}</span>
    </div> )
  }

  if (questionList && recorded){
    disp_sbmt = (
      <button onClick={() => {handleSubmit()}}>
        Submit
      </button>
  )
  }

  return (
    <div>
      <div class = "mck-interview">
      <div class = "mck-interview-prompt">
        <h2>
          {questionList ? "Prompt: " + questionList[questionIndex].prompt : "Press get question to start" }
        </h2>
      </div>

      <div class = "video-n-feedback">
        {disp_vid}     
        {disp_fdbck}
      </div>


      <div class="mck-interview-controls">     
        <div>
          <label htmlFor="icon-button-file">

            <div class = "strt-sbmit">
            {disp_time}
              <div class= "strt-stop-btn">
                { questionList &&
                <button
                  onClick={() => {
                    if (!isActive) {
                      startRecording();
                    } else {
                      stopRecording();
                      pauseRecording();
                      stopTimer();
                      setRecorded(true);
                    }
                    setIsActive(!isActive);
                  }}
                >
                  {isActive ? "Stop" : "Start"}
                </button>
                }
              </div>
              <div class = "sbmt-btn">
                {disp_sbmt}
              </div>
              
            </div>
            <div class = "mck-interview-btn-guide">
            {disp_start_stop}
            </div>

            <button 
                    onClick={() => {
                      if (questionList) {
                        getNextQuestion();
                      } else {
                        questionStart();
                      }
                    }}
                  >
                    {questionList ? "Get Next Question" : "Get First Question"}
          </button>
          </label>
        
        </div>
      </div>
      </div>
    </div>
  );
};

export default MockInterview;