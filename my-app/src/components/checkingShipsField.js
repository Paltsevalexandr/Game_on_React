import React from 'react';
import {CheckingShip} from './checkingShip.js';

export function CheckingShipsField(props) {
  let ships = props.checkingShips.map((item, index)=> {
    return(
      <CheckingShip
        shipName = {item}
        createCurrentShip    = {props.createCurrentShip}
        canPlaceShip         = {props.canPlaceShip}
        foundForbiddenCells  = {props.foundForbiddenCells}
        getCurrenShipOffsets = {props.getCurrenShipOffsets}
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
