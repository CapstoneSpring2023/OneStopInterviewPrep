import React, { useEffect, useReducer, useState } from "react";
import loadingGif from "../../images/loading.gif";
import disliked from "../../images/liked.png";
import liked from "../../images/liked.png"
import like_feedback from "../../images/like_feedback.gif"
import { API } from 'aws-amplify';
import { listReviews} from '../../graphql/queries';
import { updateReview } from '../../graphql/mutations';


function FeedbackView({companyIDs}){
    const [reviewInfo, setReviewInfo] = useState(null);
    const [likeimg, setLikeImg] = useState(liked);
    const [rating, setRating] = useState(null);
    const like_img_state = React.createRef(false);
    var like_disp;
    localStorage.setItem('like_status', false);


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
        //console.log("State is set to: ", setlike.state);
        var rev_obj = reviewInfo.filter(reviewObj => reviewObj.id === id);
        var rev_to_upvote = rev_obj[0]
        var new_rating = rev_to_upvote.rating + 1;
        /* need to set states... no need to validate user*/
        document.getElementsByClassName("votes").src = liked
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

    // function downvote(id){
    //     var rev_obj = reviewInfo.filter(reviewObj => reviewObj.id === id);
    //     var rev_to_upvote = rev_obj[0]
    //     var new_rating = rev_to_upvote.rating - 1;
    //     //console.log("State is set to: ", setlike);
    //     /* need to set states... no need to validate user*/
    //     document.getElementsByClassName("votes").src = liked;
    //     API.graphql({
    //         query: updateReview,
    //         variables:{
    //             input: {
    //                 id: rev_to_upvote.id,
    //                 rating: new_rating
    //             }
    //         }
    //     }).then(res => {
    //       //  console.log(res);
    //     }).catch(err => {
    //         console.log("Review update query in FeedbackView.js failed error is: ", err)
    //     })
    //     //window.location.reload();

    // }

    function display_rating(id){
        var rev_obj = reviewInfo.filter(reviewObj => reviewObj.id === id);
        var rev_to_upvote = rev_obj[0]
       return rev_to_upvote.rating
    }


    // function handleLike(id){
    //     console.log("liked_img_state is: ", like_img_state.current);
    //     if(like_img_state.current === true){
    //         like_img_state.current = false;
    //         localStorage.setItem('like_status', false);
    //         console.log("liked.")
    //         downvote(id);  
    //     } else{
    //         like_img_state.current = true;
    //         localStorage.setItem('like_status', true);
    //         console.log("liked.")
    //         upVote(id);
    //     }
        
    // }

    // function like(e) {
    //     var cur_img = e.target.getAttribute('src');
    //     if(cur_img === liked || like_img_state.current === false){
    //         e.target.setAttribute( 'src', liked);
    //         e.target.setAttribute('alt', 'liked');
    //     } else if (cur_img === liked || like_img_state.current === true){
    //         e.target.setAttribute( 'src', liked);
    //         e.target.setAttribute('alt', 'liked');
    //     }
    // }
    like_disp = <img class = "votes" src={likeimg} alt="upvote" align="left"  ref={like_img_state}/>

    if(reviewInfo === null ){
        return(
            <div>
                <img src={loadingGif} alt="wait until the page loads"/>
            </div>
        )
    } else {
        console.log("liked_img_state is: ", like_img_state.current);
        var reviewList = new Array();
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
                        <a onClick={() => {upVote(singleReviewItem.id)}}>{like_disp}</a>{singleReviewItem.upVotes}
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