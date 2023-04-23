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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("prompt", prompt);
      const response = await axios({
        method: "post",
        url: "https://flask-service.8ac5gsv5hb4sm.us-east-2.cs.amazonlightsail.com/textcomplete",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
    })
      // setApiResponse(result.data.choices[0].text);
      setApiResponse(response.data.choices[0].text);
    } catch (e) {
      //console.log(e);
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