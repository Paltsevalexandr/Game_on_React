import React from 'react';
import {CheckingShip} from './checkingShip.js';

export function CheckingShipsField(props) {
  let ships = props.checkingShips.map((item, index)=> {
    return(
      <CheckingShip
        shipName = {item}
        handleShip = {props.handleShip}
        foundForbiddenCells = {e=>props.foundForbiddenCells(e)}
        getCurrenShipOffsets = {e=>props.getCurrenShipOffsets(e)}
        key = {index} 
      />
    );
  });
  return(
    <div className = "shipField">
      {ships}
    </div>
  )
}
