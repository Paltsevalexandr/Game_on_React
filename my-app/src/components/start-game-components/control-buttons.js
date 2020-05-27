import React from 'react';

const ControlButtons = ({
  setGameMode, 
  randomShipsPlacement,
  createAllShips }) => {

  return (
    <>
      <button className = 'placeShipBtn'
        onClick = {() => {
          randomShipsPlacement();
          setGameMode('randomPlaycement');
          createAllShips()}}>
          1. Случайным образом
      </button>

      <button className = 'placeShipBtn'
        onClick = {() => {
          createAllShips();
          setGameMode('playerPlaycement');
        }}>
          2. Самостоятельно
      </button>
    </>
  );
}

export default ControlButtons;
