import React, { Component, useState, useRef, useEffect } from 'react'
import { useReactMediaRecorder } from 'react-media-recorder';
import Webcam from 'react-webcam';
import { API } from 'aws-amplify';
import { listQuestions} from '../graphql/queries';

// import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import styled from "styled-components";

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

  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoElement = useRef(null);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionList, setQuestionList] = useState(null);

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
    video: false,
    audio: true,
    echoCancellation: true
  });
  console.log("url", mediaBlobUrl);


  const videoConstraints = {
      width: 640,
      height: 480,
      facingMode: "user"
  }

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

  const startCam = () => {
      setIsShowVideo(true);
  }

  const stopCam = () => {
      let stream = videoElement.current.stream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setIsShowVideo(false);
  }

  return (
    <div>
      <div>
        {isShowVideo &&
            <div className="camView">

                <Webcam audio={false} ref={videoElement} videoConstraints={videoConstraints} />
            </div>
        }
        {!isShowVideo &&
          <button onClick={startCam}>Start Video</button>
        }
        {isShowVideo &&
            <button onClick={stopCam}>Stop Video</button>
        }
      </div>

      <div
      style={{
        border: "1px solid black",
        //backgroundColor: "black",
        width: "700px",
        height: "350px"
      }}
      >
      <div
        style={{
          border: "1px solid #bd9f61",
          height: "200px",
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
          marginLeft: "357px"
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
            </div>
          </label>
        </div>
        <b></b>
      </div>
      </div>
    </div>
  );
};

export default MockInterview;