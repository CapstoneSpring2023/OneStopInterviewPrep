# One Stop Interview Prep

Howdy! Welcome to our one-stop shop for technical interview preparation! Our mission is to make interview preparation free and accessible to all. We understand that technical interviews can be daunting and stressful, which is why we offer a wide range of resources and materials to help you feel confident and prepared. From coding challenges and practice problems to behavioral interview tips and advice, our platform has everything you need to succeed. Our team is dedicated to providing high-quality content and ensuring that our users have the best experience possible. Whether you're just starting your interview preparation journey or looking to refine your skills, we're here to help you every step of the way. Join our community today and take the first step towards acing your technical interview!

This website is intended to provide job hunters with opportunities to practice and prepare for any upcoming interviews they may have. We current target software engineering disciplines, but plan to expand to other industries soon.

## Documentation

### API's Used
- You can see the libraries used, and which version, in the package.json file.

### Contribution Guide

The main branch is strongly protected. This is in order to prevent breaking changes from making it into production. 

The methodology for adding changes is as follows:
- For each feature create a new branch named appropriately. 
- Once change is implemented, do a merge from the test branch to the feature branch and resolve any merge conflicts.
- Push changes to repository
- Create pull request from feature branch to test branch and have this request approved by admin.

When changes are ready to be brought to production:
- Create a pull request from test to main
- This request must be reviewed by at least one admin, preferably more.

### Main Features/Design Documentation
- Hosting
  - The React frontend is hosted on AWS Amplify.
  - The graphQL database is hosting on AWS Amplify.
  - The Flask server is containerized in docker and hosted on an AWS Lightsail instance.
    - The repository that contains the code for the Flask backend is currently private to keep certain keys secure.
- Mock Interview
  - Users can record themselves answering an interview question and submit it for AI evaliation.
  - Implemenation:
    - Record video/audio through react-media-recorder.
    - Upload .webm file and selected interview question to Flask backend using Axios.
    - Convert .webm to .wav for analysis.
    - Run .wav file through Google Speech to Text API.
    - Configure a openAI gpt3.5-turbo instance with prompts preparing it with interview question.
    - Give the model the user's response text and send the feedback in the https response.
    - Display the feedback to the user in the UI.
    - All user data is deleted on both the front and back end as soon as it is processed. 
- Coding Problems
  - Users can practice solving coding problems using C++.
  - Implementation:
    - Display practice problems to user on left side.
    - Allow user to type C++ code into code box.
    - When user submits their code, the code is uploaded to the Flask backend using Axios.
    - On the Flask server, the code is compiled using g++, executed, and the output is sent back in the https response.
- Interview Prep
  - Users can view reviews from other students on various companies.
  - Implementation:
    - Reviews are gathered from the graphQL database and displayed using forms.
    - The reviews can be filtered using conditionals in the javascript code.
- Share Experience
  - Users can submit reviews for companies, and request to submit practice problems. This is part of out crowdsourcing initiative.
  - Implementation:
    - Users prepare their review using text boxes and forms.
    - On submission, the reviews are constructed and stored in the graphQL database.
- Interview Guides
  - Users can view recommendations on how to implement a good resume or cover letter, and how to effectively prepare for an interview.
  - Implementation:
    - Recommendations are gathered from the graphQL database and displayed using forms.
    - The recommendations are filtered into three categories: Resumes, Personality Interviews, and Technical Interviews.
- Chatbot
  - Users can communicate with a chatbot to ask general questions about interview preparation. Powered by openAI.
  - Implementation:
    - An openAI chatGPT instance is created and prepared with a myriad of prompts. 
    - The frontend code manages remembering the previous prompts, as well as the respective responses from the AI.
    - All the previous prompts and responses are sent using Axios and fed to the AI instance. 
    - The response is then sent back to be displayed to the user, and stored temporarily for the length of the conversation.
    - All data is deleted when the page is refreshed or left.

### Mockinterview.js
- stopTimer
  - This function is connected to the stop button in the front end and it is used to not only stop the timer but also save the recording to the mediaBlobUrl object. 
- getNextQuestion
  - This is connected to the "get next question" button and is used to get the next question in the question list array. This is done by adding 1 to the question         index and also sets some other variables for the front end to use.
- questionStart
  - This is connected to the "get first question" button and it is used to query the database for the list of questions. This is done by the using a graphql database     query and if it returns successfully then it saves the list to the questionList variable.
- handleSubmit
  - This is connected to the submit button and it is used to pass back the data to the flask server and then save what we want to output in the disp_fdbck variable.     This is done by having a fetch to the mediaBlobUrl, then creating a blob (binary large object) with the recording and the question prompt. We then send that blob     to the flask with a axios call. Once it returns we set the variables that it returns and sets what feedback should be displayed.
  
### codingProb.js
- CodingProblemList
  - This is a function that is called on loading the page and its purpose is to load all the the questions onto the page. This is done by making a graphQL query and     then storing the response in the codeProbArr variable.
- changeCurrentProblem
   - This gets the question of the index that is given, this is done by taking given index and getting the question from the codeProbArr and then setting the local variables to the information in the question and then refreshing the window.

### Chatbot.js
- configuration
  - This function sets the openAI API key securely from the environment variables.
- handleSubmit
  - This function handles sending the user prompt, as well as the conversation history, to the Flask backend via Axios.
  - Also handles the response from the Flask backend and displays the AI response to the user.

### Database Information
- User
  - first_name: users first name
  - last_name: users last name
  - email: users email
  - CompanyID: Connects this user to a company for those who may be represenatives of a company
  - resume: users resume
- Company
  - name: company name
  - logo: comapnies logo
- URL
  - title: URL title
  - source: enum where 1 represents a leetcode problem, 2 represents a hackerrank problem and 3 represents other
  - url: the actual url
- Question
  - title: question title
  - type: enum where 1 represents a coding problem, 2 represents a technical questions and 3 represents behavioral
  - concepts: concepts covered by the question
  - prompts: question prompt (the actual question)
  - solution: potential solution for the question
- Review
  - review: written review string
  - rating: 1-5 rating for the item
  - level: Enum that represents the class of the reviewer, 1: freshmen, 2: sophmore, 3: junior, 4: senior, 5: 5th year senior
  - position: position title that the reviewer was trying to get
  - companyID: if a company review then the ID of company being reviewed
  - UserID: user ID of reviewer
  - questionID: if a question review then the ID of question being reviewed
  - URLID: if a URL review then the ID of URL being reviewed

## Links
[Main Branch](https://main.d18nfltgi3s46l.amplifyapp.com/)

[Test Branch](https://test.d18nfltgi3s46l.amplifyapp.com/)
