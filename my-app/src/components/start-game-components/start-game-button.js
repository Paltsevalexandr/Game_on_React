import React from 'react';

const StartButton = ({startPlay, createAllShips}) => {
  return (
    <button 
      onClick = {() => {
        startPlay();
        createAllShips();
      }}
      className = 'start-game-btn'>
        Start Game
    </button>
  );
}

export default StartButton;
