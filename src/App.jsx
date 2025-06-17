import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../src/Pages/Home"
import Bot from "../src/Pages/Bot"
import Protected from './Protected'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/chat-page' element={<Protected Component={Bot} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
