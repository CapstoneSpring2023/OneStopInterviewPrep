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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '10',
        }}
      >
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 30,
          }}
        >
          <text>
            <strong>Justin: </strong>
            {apiResponse}
          </text>
        </div>
      )}
    </>
  );
};


export default Chatbot;