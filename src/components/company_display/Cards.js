import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"
import { API } from 'aws-amplify';
import { listCompanies } from '../../graphql/queries';
// import googleImg from '../../images/googleLogo.png'

async function get_companies(){
  let comp_list_query = await API.graphql({
    query: listCompanies
  }).then(companyList => {
    let companyObjArr = companyList.data.listCompanies.items
    console.log("Company list? " + companyObjArr);
  } ).catch((err) => {
    console.log("error caught: ", err);
  });

  console.log( 
    API.graphql({
      query: listCompanies
    }));
}

function Cards() {
  get_companies();
  return (
    <div className='cards'>
        <div className='company-header'>
            <h1>Companies</h1>
        </div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems src={require('../../images/googleLogo.png')} text="Interview Prep for Google" label = "Google" path = "/googlePrep"/>
                    <CardItems src= {require("../../images/facebookLogo.png")} text="Interview Prep for Facebook" label = "Facebook" path = "/facebookPrep"/>
                    <CardItems src= {require("../../images/amazonlogo.png")} text="Interview Prep for Amazon" label = "Amazon" path = "/amazonPrep"/>
                </ul>
                <ul className='cards__items'>
                    <CardItems src= {require("../../images/netflixLogo.png")} text="Interview Prep for Netflix" label = "Netflix" path = "/netflixPrep"/>
                    <CardItems src= {require("../../images/appleLogo.png")} text="Interview Prep for Apple" label = "Apple" path = "/applePrep"/>
                    <CardItems src= {require("../../images/microsoftLogo.png")} text="Interview Prep for Microsoft" label = "Microsoft" path = "/microsoftPrep"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards