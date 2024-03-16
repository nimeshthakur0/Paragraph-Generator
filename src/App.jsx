import { useState } from 'react'
import './App.css'
import { memo } from 'react';

function App() {

  const [size, setSize] = useState(0);
  const [temp, setTemp] = useState(0);

  return (
    <div className="container">
      <h1>Para Generator</h1>
      <div className="input-group">
        <input type="text" placeholder="Enter Number of Words" onChange={(e) => {
          setTemp(parseInt(e.target.value));
        }}/>
        <button onClick={(e) => {
          setSize(temp);
        }}>Generate</button>
      </div>
      <Paragraph size = {size} ></Paragraph>
    </div>
  )
}

const Paragraph = memo(function({size}){
  const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];
  const paragraph = [];
  const numWords = size;

  for (let j = 0; j < numWords; j++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    paragraph.push(words[randomIndex]);
  }

  const ans = paragraph.join(" ");

  return (
    <p>{ans}</p>
  )
})

export default App
