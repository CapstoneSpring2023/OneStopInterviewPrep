import React, { Component, useState } from 'react'
import logo from "./../images/ap_dark_logo.png";
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

var probName = <text></text>;
var probConcepts = <text></text>;
var probPrompt = <text></text>;
var probCompany = <text></text>;

// var compAddress = "http://localhost:5000";
var compAddress = "https://flask-service.8ac5gsv5hb4sm.us-east-2.cs.amazonlightsail.com";

var startingCCode = "#include<iostream>\nusing namespace std;\nint main() {\n\treturn 0;\n}";
var savedCode = localStorage.getItem("saved-code");
if (savedCode) {
    startingCCode = savedCode;
}

class Coding extends Component {
    getProblem () {
        // todo
        // this function will find the current problem and change what the page will output accordingly
        probName = <text>String Reversal</text>;
        probConcepts = <text>Traversal of Lists or Strings, Basic Problem Solving</text>;
        probPrompt = <text>Given a string, write a function that reverses the string such that the old first element is now the last element, the old second element is now the second to last element, etc.</text>;
        probName = localStorage.getItem("problem-title");
        probConcepts = localStorage.getItem("problem-concepts");
        probPrompt = localStorage.getItem("problem-prompt");
        probCompany = localStorage.getItem("problem-company");
    }
    handleChange(event) {
        var thisCompany = event.target.value;
        localStorage.setItem("this-company", thisCompany);
        this.setState({
            selectedOption: thisCompany
        });
    }
    saveCode() {
        localStorage.setItem("saved-code", this.state.userCode);
    }
    
    constructor() {
        super();
        var thisCompany = localStorage.getItem("this-company");
        if (!thisCompany) {
            thisCompany = "None";
        }
        this.state = {
            name: "react",
            selectedOption: thisCompany,
            userCode: startingCCode,
            language: "cpp17",
            userOutput: "Terminal Output",
            userInput: "",
            loading: false
        };
        this.saveCode = this.saveCode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.compile = this.compile.bind(this);
        this.getProblem();
    }
    async compile(){
        this.setState({userOutput: "Loading..."})
        const formData = new FormData();
        formData.append("userCCode", this.state.userCode);
        const response = await axios({
            method: "post",
            url: compAddress + '/compilecpp',
            data: formData,
            headers: {"Content-Type": "multipart/form-data"}
        })
        console.log(response);
        this.setState({userOutput: response.data.code_output})
        // axios.post(compAddress + '/compilecpp', {
        //     code: this.state.userCode,
        //     stdin: this.state.userInput
        //     }).then((res) => {
        //         console.log(res);
        //         this.setState({userOutput: res.data.output})
        //   }).then(() => {
        //   })
    }
    render() {
        return (
            <div>
                <div className="coding coding-header">
                    <div className="split coding-logo">
                        <img src={logo} alt="logo" height="100%" />
                    </div>
                    <div className="split coding-problem-name">
                        <h1>Problem Name: {probName}</h1>
                        <h2>Concepts Covered: {probConcepts}</h2>
                        <h2>Company: {probCompany}</h2>
                    </div>
                </div>
                <div className="coding coding-main">
                    <div className="split problem-list">
                        <form className='problem-sort'>
                            <h1>Sort by:</h1>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "None"
                                        checked = {this.state.selectedOption === "None"}
                                        onChange = {this.handleChange}
                                    />
                                    None
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Google"
                                        checked = {this.state.selectedOption === "Google"}
                                        onChange = {this.handleChange}
                                    />
                                    Google
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Facebook"
                                        checked = {this.state.selectedOption === "Facebook"}
                                        onChange = {this.handleChange}
                                    />
                                    Facebook
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Amazon"
                                        checked = {this.state.selectedOption === "Amazon"}
                                        onChange = {this.handleChange}
                                    />
                                    Amazon
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Netflix"
                                        checked = {this.state.selectedOption === "Netflix"}
                                        onChange = {this.handleChange}
                                    />
                                    Netflix
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Apple"
                                        checked = {this.state.selectedOption === "Apple"}
                                        onChange = {this.handleChange}
                                    />
                                    Apple
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Microsoft"
                                        checked = {this.state.selectedOption === "Microsoft"}
                                        onChange = {this.handleChange}
                                    />
                                    Microsoft
                                </label>
                            </div>
                        </form>
                        <CodingProblemList/>
                    </div>
                    <div className="split problem-statement">
                        <h2>Problem Prompt:</h2>
                        <h3>{probPrompt}</h3>
                        <h2>Your Code:</h2>
                        <div className="coding-problem-left">
                            <Editor
                                className='code-editor'
                                defaultLanguage = "cpp"
                                defaultValue=  {startingCCode}
                                onChange={(value) => this.setState({userCode: value})}
                            />
                            <RunButton className="run-button" onClick={this.compile}>Run Code</RunButton>
                            <RunButton className="save-button" onClick={this.saveCode}>Save</RunButton>
                        </div>
                        <div className="coding-problem-right">
                            <textarea disabled className="compiler-window" id="terminal" name="terminal" value={this.state.userOutput}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coding;