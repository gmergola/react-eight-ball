import React, { useState } from 'react';
import './Count.css';

function Count({ color }){
  const [redCount, setRedCount] = useState(0);
  const [goldenRodCount, setGoldenRodCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);

  // if(color === 'red'){
  //   setRedCount(1);
  // }
  // if(color === 'green'){
  //   setGreenCount(18);
  // }
  // if(color === 'goldenrod'){
    // setGoldenRodCount(56);
  // }

  return (
    <div className="Count-color-score">
      <div>Red count = {redCount}</div>
      <div>Green count = {greenCount}</div>
      <div>goldenrod count = {goldenRodCount}</div>
    </div>
  )
}

export default Count;