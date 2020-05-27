import React from 'react';

const StartButton = ({setGameMode}) => {
  return (
    <button 
      onClick = {() => setGameMode('start')}
      className = 'start-game-btn'>
        Start Game
    </button>
  );
}

export default StartButton;
