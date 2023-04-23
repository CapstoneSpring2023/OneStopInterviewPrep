import React, {useState} from 'react'
import ReviewList from '../../components/review_displays/ReviewList'
//import VideoComp from '../components/VideoPlayer/VideoComp'
import FeedbackView from '../../components/feedback_display/FeedbackView';
import GetURL from '../../components/urls/GetURL';
import { v4 as uuidv4 } from "uuid";

var companyName = <text>Google</text>;

const GooglePrep = () => {
  const [reviews, setReviews] = useState([])
  //google id = a1450ef6-f339-43cc-87e4-227601a06f27
  localStorage.setItem("this-company", "a1450ef6-f339-43cc-87e4-227601a06f27");

  return (

    <div class='company-page'>
        <div class='company-header'>
          <h1>Interview Preparation Resources For {companyName}</h1>
        </div>
        <div class='split'>
          <div class='company-left'>
            <div class='company-section'>
              <h1>Our Coding Problems</h1>
              <body>
                Go to our <a href="/coding">practice coding problems</a> and select the "Sort By {companyName}" option.
              </body>
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
        <div class='company-section'>
          <h1>Youtube Playlist</h1>
          {/* <VideoComp playListId = "PLi9RQVmJD2fapKJ4DnZzAn55NJfo5IM1c"/> */}
        </div>
        <div class="company-section reviewList">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView/>
        </div>
    </div>
  )
}

export default GooglePrep
