import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { API } from 'aws-amplify';
import { listQuestions, listCompanyQuestions} from '../../graphql/queries';
import loadingGif from "../../images/loading.gif";
import { createCompanyQuestions } from '../../graphql/mutations';

const ProbButton = styled.button `
  cursor: pointer;
  background-color: rgb(75, 0, 130);
  width: 100%;
  padding: 15px 15px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  align-self: left;
  left: 0;
  margin-top: 10px;
  margin-bottom: 0;
`

var dbAddress = localStorage.getItem("db-address");

function CodingProblemList () {
  const [codeProbArr, setcodeProbArr] = useState(null);
  useEffect(() => {

    API.graphql({
      query:createCompanyQuestions,
      variables:{
        input:{
          companyID: "c41ed82a-a85b-478d-b84a-bed887d15cd5",
          questionsId:"a1450ef6-f339-43cc-87e4-227601a06f27"
        }
      }
    }).then(res => {
      console.log("Response recieved from trying to create Company Questions: ", res);
    }).catch(err => {
      console.log("the error recieved from trying to create a company question was: ", err);
    })


    API.graphql({
      query: listCompanyQuestions
    }).then(response => {
      let codeProbsObjs = response.data.listCompanyQuestions.items
      console.log("response is: ", response.data);
      setcodeProbArr(codeProbsObjs);
  }).catch(error => {
    console.log("Error is: ", error)
  });
  },[]);

  // function changeCurrentProblem (objID) {

  //   /* -------------- Get problem info by id here -------------- */

  //   var probTitle = "None Selected";
  //   var probConcepts = "N/A";
  //   var probPrompt = "N/A";
  //   var probCompany = "N/A";
  //   var codeProb = null;
  //   if (codeProbArr != null) {
  //     codeProbArr.map(codeObj => {
  //       codeProb = (codeObj.id === objID) ?
  //         codeObj :
  //         codeProb
  //     })
  //   }
  //   if (codeProb) {
  //     probTitle = codeProb.title;
  //     probConcepts = codeProb.concepts;
  //     probPrompt = codeProb.prompt;
  //     probCompany = codeProb.company;
  //   }


  //   localStorage.setItem("problem-title", probTitle);
  //   localStorage.setItem("problem-concepts", probConcepts);
  //   localStorage.setItem("problem-prompt", probPrompt);
  //   localStorage.setItem("problem-company", probCompany);
  //   window.location.reload();
  // }

  // var problemList = new Array();
  // var thisCompany = localStorage.getItem("this-company");
  // // id, title, prompt, concepts, company
  // if(codeProbArr != null){
  //   codeProbArr.map(codeObj => {
  //     problemList.push((!thisCompany.localeCompare(codeObj.company) || thisCompany == "None") ?
  //     (<div>
  //       <ProbButton onClick={() => {changeCurrentProblem(codeObj.id)}}>{codeObj.title} ({codeObj.company})</ProbButton>
  //     </div>)
  //     : null)
  //   })
  // } else {
  //   problemList.push(<img src={loadingGif} alt="wait until the page loads"/>)
  // }
  
  // // check if problemList is full of null values
  // var isEmpty = true;
  // for (let i = 0; i < problemList.length; i++) {
  //   if (problemList[i] != null) {
  //     isEmpty = false;
  //     break;
  //   }
  // }
  // if (isEmpty) {
  //   problemList.push(<body>There are currently no problems related to this company.</body>)
  // }
  // return (
  //   <div className='show-problems'>
  //     <h1>Problems:</h1>
  //     {problemList}
  //   </div>
  // )
}

export default CodingProblemList