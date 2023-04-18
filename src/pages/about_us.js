import React from 'react'
import logo from "./../images/ap_dark_logo.png";
import experience_clipart from "./../images/experience_clipart.png";
import prep_clipart from "./../images/prep_clipart.png";
import coding_clipart from "./../images/coding_clipart.png";
import {NavLink } from "react-router-dom";
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
      <div className="about explanation">
        <div className= "split explanation-top">
        </div>
        <div className= "split explanation-bottom">
        <h1> About Us</h1>
        <h2>
          something
        </h2>
        </div>
      </div>
      <div className= "about links">
        <div className= "link-section" >
        <NavLink to="/feedbackform">
        <img className= "clipart" src={experience_clipart} alt="experience_clipart" id="experience" />
        </NavLink>

          <div className= "link-context">
            <h1>Share Experience</h1>
            <h3>some explanation</h3>
          </div>
        </div>

        <div  className= "link-section" >
        <NavLink to="/interviewPrep">
        <img className= "clipart" src={prep_clipart} alt="prep_clipart" id="prep" />
        </NavLink>
          <div className= "link-context" id="prep_context">
            <h1> Interview Prep </h1>
            <h3> some explanation </h3>
          </div>
        </div>

        <div className= "link-section" >
        <NavLink to="/coding">
        <img className= "clipart" src={coding_clipart} alt="coding_clipart" id="coding"/>
        </NavLink>
          <div className= "link-context">
            <h1> Practice Coding </h1>
            <h3> Some explanation </h3>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home