import React from 'react';
import CheckingShipsField from './checkingShipsField';
import StartButton from './start-game-button';

const MenuContainer = ({
  checkingShips,
  startPlay,
  showCheckingShips,
  createAllShips, 
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
          ? <StartButton startPlay = {startPlay}
             createAllShips = {createAllShips} />
          : null
        }
    </div>
  )
}

export default MenuContainer;
