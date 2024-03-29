import React, {useState} from 'react'
import ReviewList from '../../components/review_displays/ReviewList'
import {Link } from "react-router-dom";
import styled from "styled-components";
//import VideoComp from '../components/VideoPlayer/VideoComp'
import FeedbackView from '../../components/feedback_display/FeedbackView';
import GetURL from '../../components/urls/GetURL';

const LinkButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  width: 300px;
  height: 150px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
`

var companyName = <text>Microsoft</text>;

const MicrosoftPrep = () => {
    const [reviews, setReviews] = useState([])

    localStorage.setItem("this-company", "70b6ab87-2af7-485c-b30b-977ad6adccd6");

  return (
<div class='company-page'>
        <div class='company-header'>
          <h1>Interview Preparation Resources For {companyName}</h1>
        </div>
        <div class='split'>
          <div class='company-left'>
            <div class='company-section'>
              <h1>Our Coding Problems</h1>
              <h4>
                Go to our <a href="/coding">practice coding problems</a> and select the "Sort By {companyName}" option.
              </h4>
            </div>
            <div class='company-section'>
              <h1>HackerRank Links</h1>
              <ul>
                <GetURL type={2}/>
              </ul>
            </div>
          </div>
          <div class='company-right'>
            <div class='company-section'>
              <h1>LeetCode Problems</h1>
              <ul>
                <GetURL type = {1}/>
              </ul>
            </div>
            <div class='company-section'>
              <h1>More Resources</h1>
              <ul>
              <GetURL type = {3}/>
              </ul>
            </div>
          </div>
        </div>
        <div class="company-section reviewList">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView/>
        </div>
    </div>
  )
}


export default MicrosoftPrep