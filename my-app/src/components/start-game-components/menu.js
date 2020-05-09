import React from 'react';
import ControlButtons from './control-buttons';

const Menu = ({
  gameStart, 
  startPlay, 
  showCheckingShips,
  createAllShips,
  randomShipsPlacement}) => {

  return (
    <div className = 'menu'>
      {
        gameStart
        ? <div className = 'header'></div>
        : <h1>Расстановка кораблей</h1>
      }
      <ControlButtons 
        startPlay = {startPlay}
        showCheckingShips = {showCheckingShips}
        createAllShips = {createAllShips}
        randomShipsPlacement = {randomShipsPlacement} />
    </div>
  );
}

export default Menu;
