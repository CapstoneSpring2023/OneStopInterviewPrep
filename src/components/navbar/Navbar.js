import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
import Logo from "./Logo"
// import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Amplify, Auth } from 'aws-amplify';

const Navbar = ({signOut}) => {
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



    var styleInput = localStorage.getItem("current-style");
    var imageURL = "./../../images/ap_dark_logo.png"; 
    if(styleInput =="style1"){
    } else {
        imageURL = "./../../images/ap_light_logo.png";
    }
  return (
    <>
    <Nav>
        <NavLink exact="true" to="/">
            <Logo></Logo>
            <h1 className="nav-title">Aggie Presence</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/feedbackform">
                <div className= "nav-link">Share Experience</div>
            </NavLink>
            <NavLink to="/interviewPrep">
                <div className= "nav-link">Interview Prep</div>
            </NavLink>
            <NavLink to="/coding">
                <div className= "nav-link">Coding Problems</div>
            </NavLink>
            <NavLink to="/mockInterview">
                <div className= "nav-link">Mock Interview</div>
            </NavLink>
            <NavLink to="/guide1">
                <div className= "nav-link">Interview Guides</div>
            </NavLink>
            <NavLink to ="/chatbot">
              <div className= "nav-link"> Chatbot </div>
            </NavLink>
            <NavLink to="/settings">
                <div className= "nav-link">Settings</div>
            </NavLink>
        </NavMenu>
        <div className= "userDisplay">
            <div className="nav-link">{userName}</div>
      </div>
      <div className="signout-section">
          <Button className= "signOutBtn" onClick={signOut}>Sign Out</Button>
        </div>
    </Nav>
    </>
  )
}

export default Navbar;