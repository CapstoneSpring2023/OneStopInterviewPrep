import React, {useState} from 'react'
import ReviewList from '../../components/review_displays/ReviewList'
import { v4 as uuidv4 } from "uuid";
import FeedbackView from '../../components/feedback_display/FeedbackView';
import LeetCodeURL from '../../components/urls/LeetCodeURL'
import HackerRankURL from '../../components/urls/HackerRankURL'
import OtherURL from '../../components/urls/OtherURL'


var companyName = <text>Amazon</text>;

const AmazonPrep = () => {
    const [reviews, setReviews] = useState([])

    localStorage.setItem("this-company", "3f14d395-10bf-42c6-9d76-b79a70a77f05");

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
          {/* <VideoComp playListId = "PLi9RQVmJD2fZgRyOunLyt94uVbJL43pZ_"/>   */}
        </div>
        <div className="company-section reviewList">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView/>
        </div>
    </div>
  )
}

export default AmazonPrep