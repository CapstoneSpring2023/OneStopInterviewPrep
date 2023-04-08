import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Multiselect from 'multiselect-react-dropdown';
import { API } from 'aws-amplify';
import { createReview } from '../../graphql/mutations';
import { listCompanies } from "../../graphql/queries";
//import loadingGif from "../../images/loading.gif";

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

const Form = ({form, setForm}) => {  
  const [companyList, setCompanyList] = useState(null);
  var dropdownCompDis = new Array();
  const handleChange = e => {
    const{name, value} = e.target;
    setForm({...form, [name]: value});
    console.log("Form is set to: ", form)
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
    var level_int = parseInt(form.level);
    e.preventDefault();
      if (checkValidity()) {
        API.graphql({
          query: createReview,
          variables: {
              input: {
                review: form.review,
                rating: "0",
                level: level_int,
                position: form.job,
                companyID: form.company                
            }
          }
        }).then(res => {
          console.log("Response is: ", res);
        }).catch(err => {
          console.log("The error read is: ", err);
        });
    } else {
        alert("Please enter valid information.")
    }
  }
    return (  
      <form className="form" onSubmit={handleSubmit}>
          <h2>Share Your Experience</h2>
            <label htmlFor='Company'>Company</label><br/>
            <select placeholder="Company"
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}>
                <option value="None">Select Company</option>
                {dropdownCompDis}
            </select><br/>

            <label htmlFor='JobTitle'>Job Title</label><br/>
            <select placeholder="Job Type"
              id="job"
              name="job"
              value={form.job}
              onChange={handleChange}>
              <option value="None">Select Job Type(s)</option>
              <option value ="software engineering intern">Software Engineering Intern</option>
              <option value="Quality Assurance"> QA</option>
              </select><br/>

              <label htmlFor='Level'>Job Level</label><br/>
            <select placeholder="level"
              id="level"
              name="level"
              value={form.level}
              onChange={handleChange}>
              <option value="None">Select Job level</option>
              <option value ={1}>Freshmen</option>
              <option value={2}> Sophomore</option>
              <option value={3}>Junior</option>
              <option value={4}>4th Year Senior</option>
              <option value={5}>5th Year Senior</option>
              <option value={6}>Entry Level</option>
              </select><br/>
            <label htmlFor='review'>Review</label><br/>
            <div className="review-box"><textarea
                   value={form.review}
                   placeholder="Give feedback"  
                   id="review" 
                   name="review" 
                   autoComplete="off"
                   onChange={handleChange}>
            </textarea></div><br/>
            <SubmitButton >
              Submit
            </SubmitButton>
      </form>
    )
  //}

  
}

export default Form