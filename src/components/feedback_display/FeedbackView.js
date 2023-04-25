import React, { useEffect, useState } from "react";
import loadingGif from "../../images/loading.gif";
import upimg1 from "../../images/up1.png";
import upimg2 from "../../images/up2.png";
import { API } from 'aws-amplify';
import { listReviews} from '../../graphql/queries';
import { updateReview } from '../../graphql/mutations';
import { FaBreadSlice } from "react-icons/fa";


function FeedbackView({companyIDs}){
    const [reviewInfo, setReviewInfo] = useState(null);
    useEffect(() => {
        //
        API.graphql({
            query: listReviews
          }).then(response => {
            let reviewObj = response.data.listReviews.items
          // console.log ("response is: ", reviewObj);
            setReviewInfo(reviewObj);
        }).catch(error => {
          console.log("Error in list reviews query on FeedbackView.js: ", error)
        });
        
    },[]);
    function display_level(level_num){
        var level_str = "unknown";
        switch(level_num[0]){
            case 1:
                level_str = "Freshmen";
                break;
            case 2:
                level_str ="Sophomore";
                break;
            case 3:
                level_str = "Junior";
                break;
            case 4:
                level_str = "Senior";
                break;
            case 5:
                level_str = "5th year senior"
                break;
        }
        return level_str;
    }
    function upVote(id) {
        var rev_obj = reviewInfo.filter(reviewObj => reviewObj.id === id);
        var rev_to_upvote = rev_obj[0]
        var new_rating = rev_to_upvote.rating + 1;
        // console.log("review to upvote: ", rev_to_upvote)
        // console.log(" new rating is: ", new_rating, " new rating type: ", typeof(new_rating))
        // console.log("its id is: ", rev_to_upvote.id)
        /* User Validation needed */
        API.graphql({
            query: updateReview,
            variables:{
                input: {
                    id: rev_to_upvote.id,
                    rating: new_rating
                }
            }
        }).then(res => {
          //  console.log(res);
        }).catch(err => {
            console.log("Review update query in FeedbackView.js failed error is: ", err)
        })
        window.location.reload();
    }

    function display_rating(id){
        var rev_obj = reviewInfo.filter(reviewObj => reviewObj.id === id);
        var rev_to_upvote = rev_obj[0]
       return rev_to_upvote.rating
    }



    if(reviewInfo == null ){
        return(
            <div>
                <img src={loadingGif} alt="wait until the page loads"/>
            </div>
        )
    } else {
        var reviewList = new Array();
        var upImage = <img class = "votes" src={upimg2} alt="upvote" align="left"/>
        // if statement to change which up image to use based on whether the user has voted
        var thisCompany = localStorage.getItem("this-company");
        /*the down vote and up votes dont display properly on some company pages */
        reviewInfo.map( singleReviewItem => {
            reviewList.push(
                (!thisCompany.localeCompare(singleReviewItem.companyID)) ? 
                (<div className="reviewBox">
                    <h3>Position: {singleReviewItem.position}</h3>
                    <h3>Level: {display_level(singleReviewItem.level)}</h3>

                    <div class="votes-up">
                        <a onClick={() => { upVote(singleReviewItem.id)}}>{upImage}</a>{singleReviewItem.upVotes}
                        <h3>{display_rating(singleReviewItem.id)}</h3>
                    </div>

                    <body>
                        {singleReviewItem.review}
                    </body>
                    
                </div>)
                : null
            )
        });
        
        return(
            <div>
                {reviewList}
            </div>
        )
    }

}

export default FeedbackView;