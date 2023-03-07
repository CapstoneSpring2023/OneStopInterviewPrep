import React from 'react'
import CardItem from '../components/company_display/CardItems'
import Form from '../components/forms/Form'
//import amazon from './src/images/amazonlogo.png'
//import google from './src/images/googleLogo.png'
import Cards from '../components/company_display/Cards'


const InterviewPrep = () => {
  /*
  const [screenText, setScreenTest] = ({});

  const company = [
    {companyName: screenText["Interview Prep for Amazon"], image: amazon},
    {companyName: screenText["Interview Prep for Google"], image: google},
  ]
  */
  return (
    /*
    <div className='company-page'>
      <React.Fragment>
        {company.map((obj, idx) => 
          <CardItem key={idx} title={obj.companyName} image={obj.image} ></CardItem>
        )}
      </React.Fragment>
    </div>
    */
    <div className='company-page'>
      <Cards />
    </div>
  )
}

export default InterviewPrep