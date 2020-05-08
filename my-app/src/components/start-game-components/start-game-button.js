import React from 'react';

const StartButton = ({startPlay}) => {
  return (
    <button 
      onClick = {() => startPlay()}
      className = 'start-game-btn'>
        Start Game
    </button>
  );
}

export default StartButton;
