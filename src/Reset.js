import React from 'react';
import './Reset.css';

function Reset(){
  const styles = {
    backgroundColor: "blue",
    color: "white"
  }

  return(
    <div>
      <button className="Reset-button" style={ styles } onClick={() => {
        window.location.reload();
      }}>Reset</button>
    </div>
  )
}

export default Reset;