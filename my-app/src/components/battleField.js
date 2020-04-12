import React from 'react';
import {BattleShip} from './battleShip.js';

export function BattleField(props) {
  let battleShips;
  if(props.battleShips.length > 0) {
    battleShips = props.battleShips.map((item, index) => {
      return(
        <BattleShip
          key = {index}
          ship = {item}
          getCurrentShip = {props.getCurrentShip}
          canPlaceShip   = {props.canPlaceShip}
          getCurrenShipOffsets = {props.getCurrenShipOffsets}
          foundForbiddenCells  = {props.foundForbiddenCells}
          rotateShip           = {props.rotateShip}
        />
      );
    });
  }
  function isBattleShip() {
    return props.battleShips.find(({ shipName }) => shipName === props.currentShip);
  }
  return(
    <div className = "battleField" 
      onDrop = {(e)=>{
        isBattleShip() ? props.changeBattleShipPosition(e) : props.addShip(e);
        props.deleteSelectedShip();
      }}
      onDragOver = {e => e.preventDefault()}>
        {battleShips}
    </div>
  )
}
