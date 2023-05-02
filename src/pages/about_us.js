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
        Welcome to our one-stop shop for technical interview preparation!
         Our mission is to make interview preparation free and accessible to all. We understand that technical interviews can be daunting and stressful, 
         which is why we offer a wide range of resources and materials to help you feel confident and prepared. 
         From coding challenges and practice problems to behavioral interview tips and advice, our platform has everything you need to succeed. 
         Our team is dedicated to providing high-quality content and ensuring that our users have the best experience possible. 
         Whether you're just starting your interview preparation journey or looking to refine your skills, we're here to help you every step of the way. 
         Join our community today and take the first step towards acing your technical interview!
        </h2>
        </div>
      </div>
      <div className= "about links" id="link-area">
        <div className= "link-section" >
        <NavLink to="/feedbackform">
        <img className= "clipart" src={experience_clipart} alt="experience_clipart" id="experience" />
        </NavLink>

          <div class= "link-context">
            <h1>Share Experience</h1>
            <h3>Here, you can share your experience in an interview and talk about what went well, 
            what went poorly, and things to keep in mind for others going into an interview with the 
            same company.</h3>
          </div>
        </div>

        <div  className= "link-section" >
        <NavLink to="/interviewPrep">
        <img className= "clipart" src={prep_clipart} alt="prep_clipart" id="prep" />
        </NavLink>
          <div class= "link-context" id="prep_context">
            <h1> Interview Prep </h1>
            <h3> Every company has a different way of interviewing applicants. Here, you can 
            see resources related to particular companies, including interview experiences 
            from students like you.</h3>
          </div>
        </div>

        <div className= "link-section" >
        <NavLink to="/coding">
        <img className= "clipart" src={coding_clipart} alt="coding_clipart" id="coding"/>
        </NavLink>
          <div class= "link-context">
            <h1> Practice Coding </h1>
            <h3> There is a wide variety of coding problems you could encounter during an 
            interview. Here, you can see practice problems, code your solutions, and get 
            help in problems you don't know how to solve.</h3>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home