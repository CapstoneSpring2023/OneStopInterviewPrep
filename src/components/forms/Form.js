import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { API } from 'aws-amplify';
import { createQuestions } from '../../graphql/mutations';
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
//const Form = ({form, reviews, setForm, setReviews}) => {
  // const [tags, setTags] = useState(null);
  // const[selectedValue, setSelectedValue] = useState([])

  // useEffect(() => {
  //   fetch(dbAddress + '/tags',{
  //   method: "GET"
  // }).then(response => {
  //   if (response.type === 'opaque' || response.ok) {
  //       response.json().then(revItems => {
  //         setTags(revItems)
  //     });
  //   } 
  // }).catch(error => {
  //   console.log("Error is: ", error)
  // });
  // },[]);

  // const handleRemovedTag = e => {
  //   //
  // }

  // const handleChange = e => {
  //   const{name, value} = e.target;
  //   setForm({...form, [name]: value});
  //   console.log("Form is set to: ", form)
  // }

const Form = ({form, setForm}) => {  
  // const handleSelectedChange = e => {
  //   // console.log("selected change detected")
  //   // setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : ["empty"]);
  //   // console.log("selectedValue",selectedValue)
  // }
  const handleChange = e => {
    const{name, value} = e.target;
    setForm({...form, [name]: value});
    console.log("Form is set to: ", form)
  }
  const checkValidity = () => {
    // todo
    return true;
  }
  const handleSubmit = e => {


  //   const newQuestions = await API.graphql({
  //     query: createQuestions,
  //     variables: {
  //         input: {
  //     "title": "Lorem ipsum dolor sit amet",
  //     "type": 1020,
  //     "concepts": [],
  //     "prompt": "Lorem ipsum dolor sit amet",
  //     "solution": "Lorem ipsum dolor sit amet",
  //     "Companies": []
  //   }
  //     }
  // });
      if (checkValidity()) {
        console.log(
          "form.name is: ", form.name, " and its type is: ", typeof(form.name)
        )
        API.graphql({
          query: createQuestions,
          variables: {
              input: {
              "title": form.name,
              "type": 1,
              "concepts": [form.concepts],
              "prompt": form.prompt,
              "solution": "",
              "Companies": [form.company]
            }
          }
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
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Amazon">Amazon</option>
                <option value="Netflix">Netflix</option>
                <option value="Apple">Apple</option>
                <option value="Microsoft">Microsoft</option>
            </select><br/>

            <label htmlFor='JobTitle'>Job Title</label><br/>
            <select placeholder="Job Type"
              id="job"
              name="job"
              value={form.job}
              onChange={handleChange}>
              <option value="None">Select Job Type(s)</option>
              {/* {tags.map(company =>
                (<option value = {company.id}>{company.name}</option>)
                )} */}
              </select><br/>

            <label htmlFor='Name'>Name</label><br/>
            <textarea
                   value={form.name}
                   placeholder="Enter your name"  
                   id="name" 
                   name="name" 
                   autoComplete="off"
                   onChange={handleChange}>
            </textarea><br/>
            <label htmlFor='Email'>Valid School Email</label><br/>
            <textarea
                   value={form.email}
                   placeholder="Enter your valid school email"
                   id="email" 
                   name="email" 
                   autoComplete="off"
                   onChange={handleChange}>
            </textarea><br/>
            <label htmlFor='review'>Review</label><br/>
            <div class="review-box"><textarea
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