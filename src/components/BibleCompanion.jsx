import React from 'react';
import { useState } from 'react'

import '../styling/GospelCompanionDisplay.css';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// question formatting - generated by claude.ai
const QuestionFormatting = ({ text }) => {
  // Split the text into questions using a regex that preserves the numbers
  const processedQuestions = text.split(/(?=\d+[.)]\s*)/).filter(q => q.trim());

  return (
    <div>
      {processedQuestions.map((question, index) => (
        <React.Fragment key={index}>
          <div className="mb-4">{question}</div>
          {index < processedQuestions.length - 1 && <div className="h-4"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

const BibleCompanion = () => {
  const [verse, setVerses] = useState("");
  const [generated_questions, setQuestions] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  async function callOpenAIAPI() {
    // Clear previous state
    setQuestions("");
    setError("");

    if (!verse.trim()) {
      setError("Please enter a Bible verse or passage before generating questions.");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Calling the OpenAI API");
      
      {/* Framing question generation */}
      const APIBody = {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": `You will be provided with verses from the Bible, specifically from one of the four Gospels.
                        Your task is to generate 1-3 Bible study questions related to the verses. These questions may
                        be for reading comprehension, for discussion, or for connecting to other passages in the Bible.
                        Switch up the genre of each question; it isn't necessary for there to always be one of each 
                        question. Always number each question. If there is less commentary for a specific verse in the 
                        'Catena Aurea', then the ouput can be fewer questions.`
          },
          {
            "role":"system",
            "content": `Use commentary from St. Thomas Aquinas' 'Catena Aurea.' The commentary for those specific verses 
                        should be used to frame the questions. The use of the commentary is to help build questions, do 
                        not directly reference the Church Fathers by name in the questions.`
          },
          {
            "role":"user",
            "content": `And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up:`
          },
          {
            "role":"system",
            "content": `How does the imagery of the bronze serpent, which represents Christ taking on the 'venom' of sin 
                        while remaining sinless, deepen your understanding of the cross as both a symbol of death and a 
                        source of life? How does 'looking upon' Christ crucified in faith resemble the Israelites looking 
                        upon the serpent in the wilderness for healing? In what ways can this act of 'looking' manifest 
                        in your daily life?`
          },
          {
            "role": "user",
            "content": verse
          }
        ],
        "temperature": 0.7,
        "max_tokens": 350,
        "top_p": 0.8
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data = await response.json();
      setQuestions(data.choices[0].message.content.trim());
    } catch (err) {
      console.error('Error:', err);
      setError("Sorry, there was an error generating questions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
  
  console.log(verse);
  return (
    <div className="App">
      <div>
        <textarea
          value={verse}
          onChange={(e) => setVerses(e.target.value)}
          placeholder='Paste your Bible verses/passages here!'
          cols={40}
          rows={10}
        />
      </div>
      <div>
        {/* Button display */}
        <button onClick={callOpenAIAPI} disabled={isLoading}>
          {isLoading ? 'Preparing your Questions!' : 'Generate Questions for this Passage'}
        </button>

        {/* Error handling */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Questions display */}
        <div className='study-questions'>
          {generated_questions !== "" ?
            <><h3>Here are your study questions: <hr></hr></h3><p><QuestionFormatting text={generated_questions}/></p></>
            :
            null
          }
        </div>
      </div>
    </div>
  )
}

export default BibleCompanion;