import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
import Logo from "./Logo"
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Amplify, Auth } from 'aws-amplify';

const Navbar = (props) => {
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
        <NavLink exact to="/">
            <Logo></Logo>
            <h1 class="nav-title">Aggie Presence</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/feedbackform" activeStyle>
                <div class = "nav-link">Share Experience</div>
            </NavLink>
            <NavLink to="/interviewPrep" activeStyle>
                <div class = "nav-link">Interview Prep</div>
            </NavLink>
            <NavLink to="/coding" activeStyle>
                <div class = "nav-link">Coding Problems</div>
            </NavLink>
            <NavLink to="/mockInterview" activeStyle>
                <div class = "nav-link">Mock Interview</div>
            </NavLink>
            <NavLink to="/guide1" activeStyle>
                <div class = "nav-link">Interview Guides</div>
            </NavLink>
            <NavLink to="/settings" activeStyle>
                <div class = "nav-link">Settings</div>
            </NavLink>
        </NavMenu>
        <div class = "Userdisplay">
        <View className="App">
            <Heading level={3} class ="text-area">{userName}</Heading>
          {/* <Button class="signout-btn" onClick={props.signOut}>Sign Out</Button> */}
        </View>
      </div>

    </Nav>
    </>
  )
}

export default Navbar;