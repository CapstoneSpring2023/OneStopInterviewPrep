import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { API } from 'aws-amplify';
import { listQuestions, listCompanyQuestions} from '../../graphql/queries';
import loadingGif from "../../images/loading.gif";

const ProbButton = styled.button `
  cursor: pointer;
  background-color: #8f4646;
  width: 100%;
  padding: 15px 15px;
  color: #F6EEE0;
  text-align: center;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  align-self: left;
  left: 0;
  margin-top: 10px;
  margin-bottom: 0;
`

function CodingProblemList () {
  const [codeProbArr, setcodeProbArr] = useState(null);
  useEffect(() => {
    API.graphql({
      query: listCompanyQuestions
    }).then(response => {
      let codeProbsObjs = response.data.listCompanyQuestions.items
      //console.log("response is: ", codeProbsObjs);
      setcodeProbArr(codeProbsObjs);
  }).catch(error => {
    console.log("Error is: ", error)
  });
  },[]);

  function changeCurrentProblem (objID) {

    /* -------------- Get problem info by id here -------------- */

    var probTitle = "None Selected";
    var probConcepts = "N/A";
    var probPrompt = "N/A";
    var probCompany = "N/A";
    var codeProb = null;
    if (codeProbArr != null) {

      codeProbArr.map(codeObj => {
        codeProb = (codeObj.id === objID) ?
          codeObj :
          codeProb
      })
    }
    if (codeProb) {
      probTitle = codeProb.questions.title;
      probConcepts = codeProb.questions.concepts;
      probPrompt = codeProb.questions.prompt;
     // probCompany = codeProb.questions.company;
    }


    localStorage.setItem("problem-title", probTitle);
    localStorage.setItem("problem-concepts", probConcepts);
    localStorage.setItem("problem-prompt", probPrompt);
    localStorage.setItem("problem-company", probCompany);
    window.location.reload();
  }

  var problemList = new Array();
  var thisCompany = localStorage.getItem("this-company");
  // id, title, prompt, concepts, company
  if(codeProbArr != null){
    codeProbArr.map(codeObj => {
      problemList.push((!thisCompany.localeCompare(codeObj.company.name) || thisCompany == "None") ?
      (<div>
        {<ProbButton onClick={() => changeCurrentProblem(codeObj.id)} >{codeObj.questions.title} ({codeObj.company.name})</ProbButton> }
      </div>)
      : null)
    })
  } else {
    problemList.push(<img src={loadingGif} alt="wait until the page loads"/>)
  }
  
  // check if problemList is full of null values
  var isEmpty = true;
  for (let i = 0; i < problemList.length; i++) {
    if (problemList[i] != null) {
      isEmpty = false;
      break;
    }
  }
  if (isEmpty) {
    problemList.push(<h3>There are currently no problems related to this company.</h3>)
  }
  return (
    <div className='show-problems'>
      <h1>Problems:</h1>
      {problemList}
    </div>
  )
}

export default CodingProblemList