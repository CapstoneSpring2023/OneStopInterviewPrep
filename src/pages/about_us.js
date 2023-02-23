import React from 'react'
import logo from "./../images/ap_dark_logo.png";
import experience_clipart from "./../images/experience_clipart.png";
import prep_clipart from "./../images/prep_clipart.png";
import coding_clipart from "./../images/coding_clipart.png";
import {Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  width: 300px;
  height: 150px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: var(--btntxtcolor);
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
`

const Home = () => {
  return (
    <div>
      <div class="about explanation">
        <div class = "split explanation-top">
        </div>
        <div class = "split explanation-bottom">
        <h1> About Us</h1>
        <h2>
          something
        </h2>
        </div>
      </div>
      <div class = "about links">
        <div class = "link-section" >
        <Link to="/feedbackform">
        <img class = "clipart" src={experience_clipart} alt="experience_clipart" id="experience" />
        </Link>

          <div class= "link-context">
            <h1>Share Experience</h1>
            <h3>some explanation</h3>
          </div>
        </div>

        <div  class = "link-section" >
        <Link to="/interviewPrep">
        <img class= "clipart" src={prep_clipart} alt="prep_clipart" id="prep" />
        </Link>
          <div class= "link-context" id="prep_context">
            <h1> Interview Prep </h1>
            <h3> some explanation </h3>
          </div>
        </div>

        <div class = "link-section" >
        <Link to="/coding">
        <img class= "clipart" src={coding_clipart} alt="coding_clipart" id="coding"/>
        </Link>
          <div class= "link-context">
            <h1> Practice Coding </h1>
            <h3> Some explanation </h3>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home