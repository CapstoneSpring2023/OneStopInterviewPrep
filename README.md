# One Stop Interview Prep
Howdy, welcome to our One Stop Interview Prep website GitHub. This website is intended to provide job hunters with opportunities to practice and prepare for any upcoming interviews they may have. We current target software engineering disciplines, but plan to expand to other industries soon.

## Documentation

### Libraries Used
- You can see the libraries used, and which version, in the package.json file.

### Main Features
- Mock Interview
  - Users can record themselves answering an interview question and submit it for AI evaliation.
- Coding Problems
  - Users can practice solving coding problems using C++.
- Interview Prep
  - Users can view reviews from other students on various companies.
- Share Experience
  - Users can submit reviews for companies, and request to submit practice problems. This is part of out crowdsourcing initiative.
- Interview Guides
  - Users can view recommendations on how to implement a good resume or cover letter, and how to effectively prepare for an interview.
- Chatbot
  - Users can communicate with a chatbot to ask general questions about interview preparation. Powered by openAI.

### Mockinterview.js
- stopTimer
  - This function is connected to the stop button in the front end and it is used to not only stop the timer but also save the recording to the mediaBlobUrl object. 
- getNextQuestion
  - This is connected to the "get next question" button and is used to get the next question in the question list array. This is done by adding 1 to the question         index and also sets some other variables for the front end to use.
- questionStart
  - This is connected to the "get first question" button and it is used to query the database for the list of questions. This is done by the using a graphql database     query and if it returns successfully then it saves the list to the questionList variable.
- handleSubmit
  - This is connected to the submit button and it is used to pass back the data to the flask server and then save what we want to output in the disp_fdbck variable.     This is done by having a fetch to the mediaBlobUrl, then creating a blob (binary large object) with the recording and the question prompt. We then send that blob     to the flask with a axios call. Once it returns we set the variables that it returns and sets what feedback should be displayed.

## Links
[Main Branch](https://main.d18nfltgi3s46l.amplifyapp.com/)

[Test Branch](https://test.d18nfltgi3s46l.amplifyapp.com/)
