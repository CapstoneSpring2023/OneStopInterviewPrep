import React, {useState} from 'react'
import ReviewList from '../../components/review_displays/ReviewList'
//import VideoComp from '../components/VideoPlayer/VideoComp'
import FeedbackView from '../../components/feedback_display/FeedbackView';
import LeetCodeURL from '../../components/urls/LeetCodeURL'
import HackerRankURL from '../../components/urls/HackerRankURL'
import OtherURL from '../../components/urls/OtherURL'
import { v4 as uuidv4 } from "uuid";

var companyName = <text>Google</text>;

const GooglePrep = () => {
  const [reviews, setReviews] = useState([])
  //google id = a1450ef6-f339-43cc-87e4-227601a06f27
  localStorage.setItem("this-company", "a1450ef6-f339-43cc-87e4-227601a06f27");

  return (

    <div className='company-page'>
        <div className='company-header'>
          <h1>Interview Preparation Resources For {companyName}</h1>
        </div>
        <div className='split'>
          <div className='company-left'>
            <div className='company-section'>
              <h1>Our Coding Problems</h1>
              <body>
                Go to our <a href="/coding">practice coding problems</a> and select the "Sort By {companyName}" option.
              </body>
            </div>
            <div className='company-section'>
              <h1>HackerRank Links</h1>
              <ul>
                <HackerRankURL/>
              </ul>
            </div>
          </div>
          <div className='company-right'>
            <div className='company-section'>
              <h1>LeetCode Problems</h1>
              <ul>
                <LeetCodeURL/>
              </ul>
            </div>
            <div className='company-section'>
              <h1>More Resources</h1>
              <ul>
                <OtherURL/>
              </ul>
            </div>
          </div>
        </div>
        <div className='company-section'>
          <h1>Youtube Playlist</h1>
          {/* <VideoComp playListId = "PLi9RQVmJD2fapKJ4DnZzAn55NJfo5IM1c"/> */}
        </div>
        <div className="company-section reviewList">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView/>
        </div>
    </div>
  )
}

export default GooglePrep
