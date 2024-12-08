import React from 'react';
import { useState } from 'react'

import '../styling/GospelDisplay.css';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const BibleCompanion = () => {
    const [verse, setVerses] = useState("");
    const [generated_questions, setQuestions] = useState("");
  
    async function callOpenAIAPI() {
      console.log("Calling the OpenAI API");
      console.log(API_KEY);
      
      const APIBody = {  // make question + answer format to restrict the GPT model to pulling information from the Catena Aurea (it is already trained on the pdf file so you don't have to do that)
        // check notes in google docs to better this
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": "You will be provided with verses from the Bible, and your task is to generate 1-3 Bible study questions related to the verses."
          },
          {
            "role":"system",
            "content": "Incorporate the reflection by the Church Fathers based on these verses from the 'Catena Aurea' into the study questions."
          },
          {
            "role":"user",
            "content": "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:"
          },
          {
            "role":"system",
            "content": "According to the Church Fathers, such as Augustine and Chrysostom, the bronze serpent represents Christ taking on the 'venom' of sin while remaining sinless. How does this imagery deepen your understanding of the cross as both a symbol of death and a source of life? How does 'looking upon' Christ crucified in faith resemble the Israelites looking upon the serpent in the wilderness for healing? In what ways can this act of 'looking' manifest in your daily life?"
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
            cols={40}
            rows={10}
          />
        </div>
        <div>
          <button onClick={callOpenAIAPI}>Generate Questions for this Passage</button>
          {generated_questions !== "" ?
            <><h3>Here are some questions: </h3><p>{generated_questions}</p></>
            :
            null
          }
        </div>
      </div>
    )
}

export default BibleCompanion;