import React from 'react';
import { useState } from 'react'

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const Bible = () => {
    const [verse, setVerses] = useState("");
    const [generated_questions, setQuestions] = useState("");
  
    async function callOpenAIAPI() {
      console.log("Calling the OpenAI API");
      console.log(API_KEY);
      
      const APIBody = {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": "You will be provided with verses from the Bible, and your task is to generate 1-3 Bible study questions related to the verses."
          },
          {
            "role": "user",
            "content": verse
          }
        ],
        "temperature": 0.7,
        "max_tokens": 150,
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
        setQuestions(data.choices[0].message.content.trim());
      });
    }
  
    console.log(verse);
    return (
      <div className="App">
        <div>
          <textarea
            onChange={(e) => setVerses(e.target.value)}
            placeholder='Paste your Bible verses/passages here!'
            cols={50}
            rows={10}
          />
        </div>
        <div>
          <button onClick={callOpenAIAPI}>Get Bible Study Questions from OpenAI API</button>
          {generated_questions !== "" ?
            <><h3>Here are some questions: </h3><p>{generated_questions}</p></>
            :
            null
          }
        </div>
      </div>
    )
}

export default Bible