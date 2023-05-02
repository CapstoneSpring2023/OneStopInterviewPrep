import { useState } from "react"
import axios from "axios"
const { Configuration, OpenAIApi } = require("openai");

const Chatbot = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [promptArray, setPromptArray] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      // var tempPromptArray = promptArray.concat([prompt]);
      // var tempPromptRoleArray = promptRoleArray.concat(["user"]);
      // for(let i = 0, len = tempPromptArray.length, )
      var promptJSON = new Object();
      promptJSON.role = "user";
      promptJSON.content = prompt;
      formData.append("promptArray", JSON.stringify(promptArray.concat(promptJSON)));
      const response = await axios({
        method: "post",
        url: "https://flask-service.8ac5gsv5hb4sm.us-east-2.cs.amazonlightsail.com/textcomplete",
        // url: "http://localhost:5000/textcomplete",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
    }).then(response => {
        var responseJSON = new Object();
        responseJSON.role = "assistant";
        responseJSON.content = response.data.choices[0].message.content;
        setPromptArray(promptArray.concat([promptJSON, responseJSON]))
        // setPromptRoleArray(promptRoleArray.concat(["user", "assistant"]))
        setApiResponse(response.data.choices[0].message.content);
        console.log(promptArray);
    })
      // const responseText = ;
      
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setPrompt("");
    setLoading(false);
  };


  return (
    <div class = "chatbot">
      <div class = "description"> 
      <div class = "description-text">
      Introducing our AI chatbot feature,
       designed to help students better understand computer 
       science concepts and clarify any unfamiliar terms. 
       Our chatbot is your personal learning companion, available 24/7 
       to answer your questions and provide you with clear and concise 
       explanations of key concepts. With its advanced natural language
       processing capabilities, our chatbot can understand your queries 
       and provide relevant and accurate information in real-time. 
       Whether you're struggling to understand a complex algorithm or 
       need a quick definition of a technical term, our chatbot is here 
       to assist you every step of the way. Our goal is to make learning 
       computer science more accessible and engaging, and our chatbot 
       is just one of the many ways we're achieving that. 
       Try it out today and see for yourself how our chatbot 
       can enhance your learning experience!
      </div>
      </div>
      <div class = "chatbot-submit">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            placeholder="Please ask Justin a question"
            onChange={(e) => setPrompt(e.target.value)}
            style={{width: 800}}
          ></input>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      {apiResponse && (
        <div class = "chatbot-response">
          <text>
            <strong>Justin: </strong>
            {apiResponse}
          </text>
        </div>
      )}
    </div>
  );
};


export default Chatbot;