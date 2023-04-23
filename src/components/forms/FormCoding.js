import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { API } from 'aws-amplify';
import { createQuestions, createCompanyQuestions } from '../../graphql/mutations';
import { listCompanies } from "../../graphql/queries";

const SubmitButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  padding: 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  color: var(--btntxtcolor);
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: center;
`

const FormCoding = ({formCd, setFormCd}) => {
    const [companyList, setCompanyList] = useState(null);
    var dropdownCompDis = new Array();

    const handleChange = e => {
        const{name, value} = e.target;
        setFormCd({...formCd, [name]: value});
    }
    const checkValidity = () => {
        // todo
        return true;
    }
    
    useEffect( ()=> {
      API.graphql({
        query: listCompanies
      }).then( res => {
        let companiesArr = res.data.listCompanies.items;
        setCompanyList(companiesArr);
      }).catch (err => {
        console.log("An error occurred when retrieving company list");
      })
    },[])
    
      if(companyList != null){
        companyList.map( compObj => {
          dropdownCompDis.push(
          <option value ={compObj.id}>{compObj.name}</option>
          )
        })
    }

    const handleSubmit = e => {
      e.preventDefault();
        if (checkValidity()) {
            API.graphql({
                query: createQuestions,
                variables: {
                    input: {
                        title: formCd.name,
                        type: 1,
                        concepts: [formCd.concepts],
                        prompt: formCd.prompt,
                        solution: formCd.solution
                  }
                }
              }).then(res => {
                var questionID = res.data.createQuestions.id
                //console.log("The question ID is: ", questionID)
                API.graphql({
                  query: createCompanyQuestions,
                  variables:{
                    input:{
                      companyId: formCd.company,
                      questionsId: questionID
                    }
                  }
                }).then(bridge_ent_res => {
                //  console.log("Response from bridge entity: ", bridge_ent_res)
                }).catch (bridge_err => {
                  console.log("Error while creating company questions (entry in bridge entity data type) on FormCoding.js: ", bridge_err);
                })
              }).catch(err => {
                console.log("Error in Create questions query in FormCoding.js: ", err);
              });


        } else {
            alert("Please enter valid information.")
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Submit A Coding Problem</h2>
            <label htmlFor='Company'>Which Company Asked This Question?</label><br/>
            <select placeholder="Company Name"
                id="company"
                name="company"
                value={formCd.company}
                onChange={handleChange}>
                <option value="None">Select Company</option>
                {dropdownCompDis}
            </select><br/>

            <label htmlFor='Name'>Problem Name</label>
            <textarea
                 value={formCd.name}
                 placeholder="Enter problem title"  
                 id="name" 
                 name="name" 
                 autoComplete="off"
                 onChange={handleChange}>
            </textarea><br/>

            <label htmlFor='Concepts'>Concepts Covered</label>
            <textarea
                value={formCd.concepts}
                placeholder="What concepts does this problem cover?"  
                id="concepts" 
                name="concepts" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/>
          
            <label htmlFor='prompt'>Problem Prompt</label><br/>
            <div class="review-box"><textarea
                    value={formCd.prompt}
                    placeholder="Enter problem prompt"  
                    id="prompt" 
                    name="prompt" 
                    autoComplete="off"
                    onChange={handleChange}>
            </textarea></div><br/>


            <label htmlFor='solution'>Optional: Suggested solution</label><br/>
            <div class="review-box"><textarea
                    value={formCd.solution}
                    placeholder="Enter a suggested solution "  
                    id="solution" 
                    name="solution" 
                    autoComplete="off"
                    onChange={handleChange}>
            </textarea></div><br/>
            <SubmitButton >
                Submit
            </SubmitButton>
        </form>
    )
}

export default FormCoding