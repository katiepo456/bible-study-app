import React from 'react';
import { useState } from 'react'

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const Bible = () => {
    const [tweet, setTweet] = useState("");
    const [sentiment, setSentiment] = useState(""); // Negative or Positive
  
    async function callOpenAIAPI() {
      console.log("Calling the OpenAI API");
      console.log(API_KEY);
      
      const APIBody = {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": "You will be provided with a tweet, and your task is to classify its sentiment as positive, neutral, or negative."
          },
          {
            "role": "user",
            "content": "I loved the new Batman movie!"
          }
        ],
        "temperature": 0.7,
        "max_tokens": 64,
        "top_p": 1
      }
      
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setSentiment(data.choices[0].message.content.trim());
      });
    }
  
    console.log(tweet);
    return (
      <div className="App">
        <div>
          <textarea
            onChange={(e) => setTweet(e.target.value)}
            placeholder='Paste your Bible verses/passages here!'
            cols={50}
            rows={10}
          />
        </div>
        <div>
          <button onClick={callOpenAIAPI}>Get Bible Study Questions from OpenAI API</button>
          {sentiment !== "" ?
            <h3>Here are some questions: {sentiment}</h3>
            :
            null
          }
        </div>
      </div>
    )
}

export default Bible