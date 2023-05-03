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


## Links
[Main Branch](https://main.d18nfltgi3s46l.amplifyapp.com/)

[Test Branch](https://test.d18nfltgi3s46l.amplifyapp.com/)
