import axios from "axios";
import React, { useState } from "react";
import botVideo from "../videos/bot.mp4";

const Bot = () => {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  async function generateAnswer() {
    setChatLog([
      ...chatLog,
      { text: question, type: "user" },
      { text: "loading...", type: "bot" },
    ]);

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAfUZDQyAAyqQh4d4LD0Aa7XZ8xEsLZDdM",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    const botResponse = response.data.candidates[0].content.parts[0].text;

    setChatLog((prevChatLog) =>
      prevChatLog.map((msg) =>
        msg.text === "loading..." ? { text: botResponse, type: "bot" } : msg
      )
    );

    setQuestion("");
  }

  return (
    <div className="page-container">
      <video autoPlay loop muted className="background-video">
        <source src={botVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="chat-container">
        <div className="content">
          <h1>Med - Bot</h1>
          <div className="chat-log">
            {chatLog.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              cols="30"
              rows="3"
              placeholder="Type your question here..."
            ></textarea>
            <button onClick={generateAnswer}>Generate Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
body {
  background-color: #f0f2f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  overflow: hidden;
}
.page-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.chat-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  height: 80vh;
  border-radius: 10px;
  overflow: hidden;
}
.content {
  position: relative;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
h1 {
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
}
.chat-log {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 10px;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  font-size: 16px;
  resize: none;
}
button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}
button:hover {
  background-color: #0056b3;
}
.message {
  background-color: #e0f7fa;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #007bff;
  margin-top: 10px;
  white-space: pre-wrap;
}
.message.bot {
  background-color: #e8eaf6;
  border: 1px solid #3f51b5;
}
.loading {
  color: #999999;
}
.center {
  text-align: center;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #007bff;
  border-radius: 4px;
}
`;

const BotWithStyles = () => (
  <>
    <style>{styles}</style>
    <Bot />
  </>
);

export default BotWithStyles;
