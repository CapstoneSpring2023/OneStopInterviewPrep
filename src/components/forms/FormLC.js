import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { API } from 'aws-amplify';
import { createURL } from '../../graphql/mutations';
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



const FormLC = ({formLC, setFormLC}) => {
    const [companyList, setCompanyList] = useState(null);
    var dropdownCompDis = new Array();

    const handleChange = e => {
        const{name, value} = e.target;
        setFormLC({...formLC, [name]: value});
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
        //e.preventDefault();
        console.log("formLC.urlType", formLC.urlType)
        if(formLC.urlType != undefined || formLC.urlType != "None" ){
            if (checkValidity()) {
                var type_int = parseInt(formLC.urlType);
                API.graphql({
                    query: createURL,
                    variables: {
                        input: {
                            title: formLC.name,
                            source: type_int,
                            url: formLC.link
                      }
                    }
                  }).then(res => {
                    //the response returns the data object that was just created, in this case Questions
                    //another entry in the Company questions table needs to be created with the ID of the newly created question (attribute of the 'res')
                    //and the id of the company (companyID: formCd.company)
                    //nested..
                    var reviewID = res.data
                    console.log("The review ID is: ", reviewID)
                    // API.graphql({
                    //   query: createQuestionsCompany,
                    //   variables:{
                    //     input:{
                    //       companyId: formCd.company,
    
                    //     }
                    //   }
                    // })
                    console.log("Response is: ", res);
                  }).catch(err => {
                    console.log("The error read is: ", err);
                  });
    
             } 
        } else{
            alert("Need to enter Link Type!")
        }

          
        if (checkValidity()) {
            alert("The input data is good!");
        } else {
            alert("Please enter valid information.")
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Submit A LeetCode/HackerRank/Other Link</h2>

            <label htmlFor='Company'>Company</label><br/>
            <select placeholder="Company Name"
                id="company"
                name="company"
                value={formLC.company}
                onChange={handleChange}>
                <option value="None">Select Company</option>
                {dropdownCompDis}
            </select><br/>

            <label htmlFor='urlType'>Link Type?</label><br/>
            <select placeholder="Link Type"
                id="urlType"
                name="urlType"
                value={formLC.urlType}
                onChange={handleChange}>
                <option value="None">Select Link Type</option>
                <option value={1}>LeetCode</option>
                <option value={2}>HackerRank</option>
                <option value={3}>Other (article or general)</option>
            </select><br/>
            
            <label htmlFor='Name'>Name</label>
            <textarea
                value={formLC.name}
                placeholder="Enter problem name"  
                id="name" 
                name="name" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/>

            <label htmlFor='Link'>Link</label>
            <textarea
                value={formLC.link}
                placeholder="Enter LeetCode/HackerRank/Other Link"  
                id="link" 
                name="link" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/><br/>

            <SubmitButton>
                Submit
            </SubmitButton>
        </form>
    )
}

export default FormLC