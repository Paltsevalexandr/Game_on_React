import React from 'react';
import CheckingShips from './checkingShips';
import Instructions from './instructions';

const CheckingShipsField = () => {
  
  return(
    <div className = "checkingShipsField">
      <CheckingShips/>
      <Instructions />
    </div>
  );
}

export default CheckingShipsField;
