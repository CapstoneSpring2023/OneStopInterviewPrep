import React from 'react'
// import logo from "./../images/ap_dark_logo.png";
import styled from "styled-components";
import {NavLink } from "react-router-dom";

const LinkButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  width: 200px;
  height: 90px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: var(--btntxtcolor);
  font-size: 23px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
  margin-right: 20px;
`

function Guide3 () {
    return (
        <div>
            <div className="guide-header">
                <h1>Technical Interviews</h1>
                <h2>Guides:</h2>
                <NavLink to="/guide1"><LinkButton>
                    Resumes
                </LinkButton></NavLink>
                <NavLink to="/guide2"><LinkButton>
                    Personality Interviews
                </LinkButton></NavLink>
                <NavLink to="/guide3"><LinkButton>
                    Technical Interviews
                </LinkButton></NavLink>
            </div>
            <div className="guide-section">
                <h2>What Do Employers Look For In Technical Interviews?</h2>
                <body>
                    At the point of a technical interview, the interviewer already likely knows a good amount about your 
                    technical skills. Especially if you are in junior or senior year in college, they probably assume 
                    that you have a lot of technical knowledge. So, while they want to confirm that you know what you're 
                    talking about, they will also be looking at your problem solving skills and your coding practices.
                </body>
            </div>
            <div className="guide-section">
                <h2>How Do I Know What They Will Ask Me In My Technical Interview?</h2>
                <body>
                    The short answer is that you don't. The same recruiter might even ask different questions of different 
                    candidates. But since each company looks for specific skills in their employees, they are likely to ask 
                    closely related questions. Looking at and practicing coding problems that the company has asked of 
                    candidates in the past will go a long way to prepare you for the technical interview with them.<br/>
                    You can see our list of companies and reviews from students who interviewed at those companies <NavLink to="/interviewPrep">here</NavLink>.<br/>
                    You can see our list of example coding problems that have been asked in technical interviews <NavLink to="/coding">here</NavLink>.<br/>
                </body>
            </div>
        </div>
    );
}

export default Guide3