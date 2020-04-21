import React, { useState } from 'react';
import './EightBall.css';

function choice(answers){
  let randomIdx = Math.floor(Math.random() * answers.length);
  return answers[randomIdx];
}


function EightBall({ answers }){
  const [message, setMessage] = useState("Think of a question!");
  const [color, setColor] = useState("black");
  const [redCount, setRedCount] = useState(0);
  const [goldenRodCount, setGoldenRodCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const count = () => {
    if(color === 'red'){
      setRedCount(redCount+1);
    }
    if(color === 'green'){
      setGreenCount(greenCount+1);
    }
    if(color === 'goldenrod'){
      setGoldenRodCount(goldenRodCount+1);
    }
  }
  
  const styles = {
    backgroundColor: color,
    color: "white"
  }

  function handleClick(){
    const { msg, color } = choice(answers);
    setMessage(msg);
    setColor(color);
    count();
  }

  return (
    <div className="EightBall-ball">
      <button className="EightBall-button" style={ styles } onClick={handleClick}>
        { message }
      </button>
      <div className="Count-color-score">
      <div>Red count = {redCount}</div>
      <div>Green count = {greenCount}</div>
      <div>Goldenrod count = {goldenRodCount}</div>
    </div>
    </div>
  );
}


EightBall.defaultProps = {
  answers: [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" }
  ]
}

export default EightBall;