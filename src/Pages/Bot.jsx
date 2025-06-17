import React, { useEffect, useState } from 'react'
import "../CSS/Bot.css"
import {GoogleGenerativeAI} from "@google/generative-ai"
import { useNavigate } from 'react-router-dom';


function Bot() {

  const text = ["Let's", "Have some", "Fun with", "The Bot", "Build ", "By", "Psycho God", "Click Here to Log-Out"];

  const navigate = useNavigate()

  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % text.length)
        setFade(true)
      },500)
    }, 1500)
    return () => clearInterval(interval);
  }
    , [])

  const [promp, setPromp] = useState('')
  const [ansgen, setAnsgen] = useState([])

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const handle = async () =>
  {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
      const prompt = promp;
      const result = await model.generateContent(prompt)
      console.log(result.response.text())
      setAnsgen([
        ...ansgen,
        {
          userText: promp,
          aiText:result.response.text()
        },
      ])
      
      setPromp("");
    }
    catch (err) {
      console.log(err);
    }
  }
  

  return (
    <>
      <div className="cbmain">
        <div className="cbhead">
          <h1>Chat Bot</h1>
        </div>
        <p onClick={() =>{navigate("/")}} id="tran" className={`text ${fade ? "fade-in" : "fade-out"}`}>
          {text[index]}
        </p>

        <div id="cbres">
          {ansgen.map((val, index) => (
            <div className="cbres" key={index}>
              <p id="cbresa">
                <u>USER INPUT:</u>
                <br />
                <br /> {val.userText}
              </p>
              <p id="aitxt">
                <u>AI Text: </u>
                <br />
                <br />
                {val.aiText}
              </p>
            </div>
          ))}
        </div>

        <div className="cbsearch">
          <input
            type="search"
            id="cbsrch"
            placeholder="Ask and Learn anything"
            value={promp}
            onChange={(event) => {
              setPromp(event.target.value);
            }}
          />

          <button className="cbsbtn" onClick={handle}>
            &#128269;
          </button>
        </div>
      </div>
    </>
  );
}

export default Bot
