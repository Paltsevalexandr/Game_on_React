import React from 'react';

const ControlButtons = ({
  startPlay, 
  showCheckingShips,
  randomShipsPlacement,
  createAllShips }) => {

  return (
    <>
      <button className = 'placeShipBtn'
        onClick = {() => {
          startPlay();
          randomShipsPlacement();
          createAllShips()}}>
          1. Случайным образом
      </button>

      <button className = 'placeShipBtn'
        onClick = {() => showCheckingShips()}>
          2. Самостоятельно
      </button>
    </>
  );
}

export default ControlButtons;
