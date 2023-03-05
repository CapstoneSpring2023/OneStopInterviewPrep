import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
import logo from "./../../images/ap_dark_logo.png"; 
import Logo from "./Logo"

const Navbar = () => {
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
            <NavLink to="/profile" activeStyle>
                <div class = "nav-link">Profile</div>
            </NavLink>
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
    </Nav>
    </>
  )
}

export default Navbar;