import React from 'react';
import CheckingShipsField from './checkingShipsField';
import StartButton from './start-game-button';

const StartGame = ({
  checkingShips,
  startPlay,
  showCheckingShips, 
  children
}) => {
    
  return (
    <div className = 'startGameField'>
        {children}
        {
          showCheckingShips
          ? <CheckingShipsField />   
          : null
        }
        {
          checkingShips.length === 0
          ? <StartButton startPlay = {startPlay} />
          : null
        }
    </div>
  )
}

export default StartGame;
