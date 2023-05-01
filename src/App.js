import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/about_us";
import Applications from './pages/applications';
import Network from './pages/network';
import InterviewPrep from './pages/interviewPrep';
import Coding from './pages/coding';
import GooglePrep from './pages/company_pages/googlePrep'
import FacebookPrep from './pages/company_pages/facebookPrep';
import AmazonPrep from './pages/company_pages/amazonPrep';
import NetflixPrep from './pages/company_pages/netflixPrep';
import ApplePrep from './pages/company_pages/applePrep';
import MicrosoftPrep from './pages/company_pages/microsoftPrep';
import Guide1 from "./pages/guide1";
import Guide2 from "./pages/guide2";
import Guide3 from "./pages/guide3";
import FeedbackForm from "./components/forms/FeedbackForm";
import Settings from "./pages/settings";
import MockInterview from "./pages/mockInterview";
import Profile from "./pages/profile";
import Chatbot from "./pages/chatbot";
import FileUpload from "./pages/fileupload";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
// import { generatePrompts } from './utils/openai';

const GlobalStyle1 = createGlobalStyle`
  html {
    --bgcolor: #fafafa;
    --bg2color: #BCB8B1;
    --bg3color: #BCB8B1;
    --btncolor: #2E4052;
    --btntxtcolor: #fafafa;
    --navcolor: #F6EEE0;
    --navtxtcolor: #500000;
    --navtxtcolor2: #500000;
    --hdrcolor: #8f4646;
    --txtcolor: #2E4052;
    --txtcolor2: #2E4052;
    --brdrcolor: #0d0d0d;
    --shdwcolor: #ccc;
    --lnkcolor: #BCB8B1;
    --lnk2color: #262948;
    --aboutimgshadow: rgba(127, 121, 121, 0.5);
    --aboutimgtxtcolor: #F6EEE0;
  }
`

const GlobalStyle2 = createGlobalStyle`
  html {
    --bgcolor: #170c0d;
    --bg2color: #BCB8B1;
    --bg3color: #702121;
    --btncolor: #BCB8B1;
    --btntxtcolor: #262948;
    --navcolor: #500000;
    --navtxtcolor: #fafafa;
    --navtxtcolor2: #fafafa;
    --hdrcolor: #F6EEE0;
    --txtcolor: #8f4646;
    --txtcolor2: #F6EEE0;
    --brdrcolor: #0d0d0d;
    --shdwcolor: rgba(50,50,50,0.5);
    --lnkcolor: #F6EEE0;
    --lnk2color: #8bb6c4;
    --aboutimgshadow: rgba(0,0,0,0.5);
    --aboutimgtxtcolor: #F6EEE0;
  }
`

window.onload = function() {
  var defaultStyle = localStorage.getItem("current-style");
  if (!defaultStyle) {
      localStorage.setItem("current-style", "style2");
  }
  var thisCompany = localStorage.getItem("this-company");
  if (!thisCompany) {
    localStorage.setItem("this-company", "None");
  }
  var localDBAddress = "http://localhost:3002";
  var publicDBAddress = "http://35.208.174.43:3002";
  //publicDBAddress = "http://aggie-fangs.uc.r.appspot.com/:3002";
  localStorage.setItem("db-address", publicDBAddress);
  var localCompAddress = "http://localhost:3001";
  var publicCompAddress = "http://35.209.50.168:3001";
  localStorage.setItem("comp-address", publicCompAddress);
}

function App({ signOut }) {
  document.title = "Aggie Presence";

  const whichStyle = () => {
    var styleInput = localStorage.getItem("current-style");
    var thisStyle = <GlobalStyle2/>;
    if (styleInput == "style2") {
      thisStyle = <GlobalStyle1/>;
    }
    return thisStyle;
  };
 
  const [userName, setUserDetails] = React.useState("");
  const [userData, setUserData] = React.useState("");
  const [isLoading, setLoading] = React.useState(true);
  Auth.currentAuthenticatedUser({
    bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => {
      setUserDetails(user.username);
      setUserData(user.attributes.email);
      setLoading(false);
    })
    .catch((err) => console.log(err));

  if(isLoading) {
    return <div>Loading...</div>
  }
  return (
      <BrowserRouter basename='/'>
        {whichStyle()}
        <Navbar signOut ={signOut}/>
        <Routes>
          <Route exact="true" path="/" element = {<Home />}/>
          <Route path="/applications" element = {<Applications/>}/>
          <Route path="/feedbackform" element = {<FeedbackForm/>}/>
          <Route path="/interviewPrep" element = {<InterviewPrep/>}/>
          <Route path="/coding" element = {<Coding/>}/>
          <Route path="/network" element = {<Network/>}/>
          <Route path="/googlePrep" element = {<GooglePrep/>}/>
          <Route path="/facebookPrep" element = {<FacebookPrep/>}/>
          <Route path="/amazonPrep" element = {<AmazonPrep/>}/>
          <Route path="/netflixPrep" element = {<NetflixPrep/>}/>
          <Route path="/applePrep" element = {<ApplePrep/>}/>
          <Route path="/microsoftPrep" element = {<MicrosoftPrep/>}/>
          <Route path="/guide1" element = {<Guide1/>}/>
          <Route path="/guide2" element = {<Guide2/>}/>
          <Route path="/guide3" element = {<Guide3/>}/>
          <Route path="/settings" element = {<Settings/>}/>
          <Route path="/mockInterview" element = {<MockInterview/>}/>
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/chatbot" element = {<Chatbot/>}/>
          <Route path="/fileupload" element = {<FileUpload/>}/>
        </Routes>
      </BrowserRouter>
      
  );
}

export default withAuthenticator(App);