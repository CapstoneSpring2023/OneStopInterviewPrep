import React, { useEffect, useState } from "react";
// import loadingGif from "../../images/loading.gif";
import upimg1 from "../../images/up1.png";
import upimg2 from "../../images/up2.png";
import downimg1 from "../../images/down1.png";
import downimg2 from "../../images/down2.png";


function FeedbackView({company}){
    // const [reviewInfo, setReviewInfo] = useState(null);
    // useEffect(() => {
    //     fetch(dbAddress + "/getReviews",{
    //     method: "GET"
    //   }).then(response => {
    //    if (response.type === 'opaque' || response.ok) {
    //        response.json().then(revItems => {
    //        setReviewInfo(revItems)
    //      });
    //    } 
    //  }).catch(error => {
    //    console.log("Error is: ", error)
    //  });
    // },[]);

    // function upVote(id) {
    //    // console.log("upvote id: ", id)
    //         fetch(dbAddress + '/upVote/' + id,{
    //         method: "GET"
    //     }).then(response => {
    //         if (response.type === 'opaque' || response.ok) {
    //             window.location.href = window.location.href;
    //         } 
    //     }).catch(error => {
    //     console.log("Error is: ", error)
    //     });
        
    // }

    // function downVote(id) {
    //     // do something with the id of the review
    //     //console.log("*downvote id: ", id)
    //     fetch(dbAddress + '/downVote/' + id,{
    //     method: "GET" 
    //     }).then(response => {
    //         if (response.type === 'opaque' || response.ok) {
    //             window.location.href = window.location.href;
    //         } 
    //     }).catch(error => {
    //         console.log("Error is: ", error)
    //     });
       
    // }


    // if(reviewInfo == null ){
    //     return(
    //         <div>
    //             <img src={loadingGif} alt="wait until the page loads"/>
    //         </div>
    //     )
    // } else {
    //     var reviewList = new Array();
    //     var upImage = <img src={upimg2} alt="upvote" align="left"/>
    //     // if statement to change which up image to use based on whether the user has voted
    //     var downImage = <img src={downimg2} alt="upvote" align="right"/>
    //     // if statement to change which down image to use
    //     var thisCompany = localStorage.getItem("this-company");
    //     /*the down vote and up votes dont display properly on some company pages */
    //     reviewInfo.map( singleReviewItem => {
    //         reviewList.push(
    //             (!thisCompany.localeCompare(singleReviewItem.title)) ? 
    //             (<div className="reviewBox">
    //                 <h3>Name: {singleReviewItem.name} / {singleReviewItem.title}</h3>
    //                 <h3>Tags: </h3>
    //                 <body>
    //                     {singleReviewItem.description}
    //                 </body>
    //                 <div className="votes up">
    //                     <a onClick={() => { upVote(singleReviewItem.id)}}>{upImage}</a>{singleReviewItem.upVotes}
    //                 </div>
    //                 <div className="votes down">
    //                     <a onClick={() => {downVote(singleReviewItem.id)}}>{downImage}</a>{singleReviewItem.downVotes}
    //                 </div>
    //             </div>)
    //             : null
    //         )
    //     });
        
    //     return(
    //         <div>
    //             {reviewList}
    //         </div>
    //     )
    // }

}

export default FeedbackView;