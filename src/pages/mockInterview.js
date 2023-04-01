import React, { Component, useState, useRef } from 'react'
import Webcam from 'react-webcam';
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
  
  const videoConstraints = {
      width: 640,
      height: 480,
      facingMode: "user"
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
  );
};

export default MockInterview;