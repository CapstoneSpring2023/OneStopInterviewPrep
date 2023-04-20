import React, { Component, useState, useRef, useEffect } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder';
import { API } from 'aws-amplify';
import { listQuestions} from '../graphql/queries';
// import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
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
  const [upper_loud, set_upper_loud] = useState("0");
  const [lower_loud, set_lower_loud] = useState("0");
  const [speechToText, SetSpeechToText] = useState("");

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
  console.log("url", mediaBlobUrl);
  
  const getNextQuestion = () => {
    let nextIndex = questionIndex + 1;
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
      // const wavBlob = convertWebmToMp3(blob)
      const audioFile = new File([blob], 'audiodata.webm', { type: 'audio/webm' });
      const formData = new FormData();
      formData.append("audiodata", audioFile, "audiodata.webm");
      try {
          const response = await axios({
              method: "post",
              url: "https://flask-service.8ac5gsv5hb4sm.us-east-2.cs.amazonlightsail.com/opensmileaudio",
              // url: "http://localhost:5000/opensmileaudio",
              data: formData,
              headers: {"Content-Type": "multipart/form-data"}
          })
          console.log(response.data);
          set_upper_loud(response.data.upper_loud);
          set_lower_loud(response.data.lower_loud);
          SetSpeechToText(response.data.speech_to_text);
      } catch(error) {
          console.log(error);
      }
    });
  }

  return (
    <div>
      <div
      style={{
        border: "1px solid black"
      }}
      >
      <div
        style={{
          border: "1px solid #bd9f61",
          height: "70px",
          backgroundColor: "#bd9f61",
          display: "flex"
        }}
      >
        <h4
          style={{
            marginLeft: "10px",
            textTransform: "capitalize",
            fontFamily: "sans-serif",
            fontSize: "18px",
            color: "white"
          }}
        >
        {questionList ? "Prompt: " + questionList[questionIndex].prompt : "Press get question to start" }
        </h4>
      </div>
      <div style={{ height: "38px" }}>
        {" "}
        <video src={mediaBlobUrl} controls loop />
      </div>

      <div
        className="col-md-6 col-md-offset-3"
        style={{
          backgroundColor: "black",
          color: "white",
          marginLeft: "700px"
        }}
      >
        <div style={{ marginLeft: "70px", fontSize: "54px" }}>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>

        <div style={{ marginLeft: "20px", display: "flex" }}>
          <label
            style={{
              fontSize: "15px",
              fontWeight: "Normal"
              // marginTop: "20px"
            }}
            htmlFor="icon-button-file"
          >
            <h3 style={{ marginLeft: "15px", fontWeight: "normal" }}>
              Press the Start to record
            </h3>

            <div>
              <button
                style={{
                  padding: "0.8rem 2rem",
                  border: "none",
                  marginLeft: "15px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  backgroundColor: "#42b72a",
                  color: "white",
                  transition: "all 300ms ease-in-out",
                  transform: "translateY(0)"
                }}
                onClick={() => {
                  if (!isActive) {
                    startRecording();
                  } else {
                    stopRecording();
                    pauseRecording();
                    stopTimer();
                  }

                  setIsActive(!isActive);
                }}
              >
                {isActive ? "Stop" : "Start"}
              </button>

               <button
                style={{
                  padding: "0.8rem 2rem",
                  border: "none",
                  marginLeft: "15px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  backgroundColor: "#42b72a",
                  color: "white",
                  transition: "all 300ms ease-in-out",
                  transform: "translateY(0)"
                }}
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

              <button
                style={{
                  padding: "0.8rem 2rem",
                  border: "none",
                  marginLeft: "15px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  backgroundColor: "maroon",
                  color: "white",
                  transition: "all 300ms ease-in-out",
                  transform: "translateY(0)"
                }}
                onClick={() => {handleSubmit()}}
              >Submit
              </button>
            </div>
          </label>
        </div>
        <b></b>
      </div>
      </div>
      <div 
      style={{
        marginLeft: "700px"
      }}>
      <p>Max Loud: {upper_loud}</p>
      <p>Min Loud: {lower_loud}</p>
      <p>Text: {speechToText}</p>
    </div>
    </div>
  );
};

export default MockInterview;