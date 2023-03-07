import React, { Component, useState } from 'react'
// import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import styled from "styled-components";
import CodingProblemList from "../components/coding_problems/codingProb.js";
import Editor from "@monaco-editor/react"
import axios from 'axios';
import { FaThList } from 'react-icons/fa';

const RunButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  width: 100px;
  height: 50px;
  padding: 5px 15px;
  border-radius: 8px;
  color: var(--btntxtcolor);
  text-align: center;
  font-size: 13px;
  font-family: "Lucida Console", "Courier New", monospace;
  float: left;
  margin-right: 1rem;
`

const profile = () => {
    return (
        <p>PROFILE TEST</p>
    )
}
export default profile;