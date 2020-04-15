import React from 'react';
import {BattleShip} from './battleShip.js';

export function BattleField(props) {
  function isBattleShip() {
    return props.battleShips.find(item => item.shipName === props.currentShipName);
  }

  function placeShip(e) {
    if(props.canPlaceShip === true) {
      isBattleShip() ? props.moveBattleShip(e) : props.addShip(e);
      props.deleteSelectedShip();
    }else if(props.canPlaceShip === false) {
      return;
    }
  }

  let battleShips;
  if(props.battleShips.length > 0) {
    battleShips = props.battleShips.map((item, index) => {
      return(
        <BattleShip
          key  = {index}
          ship = {item}
          createCurrentShip    = {props.createCurrentShip}
          canPlaceShip         = {props.canPlaceShip}
          foundForbiddenCells  = {props.foundForbiddenCells}
          rotateShip           = {props.rotateShip}
        />
      );
    });
  }
  return(
    <div className   = "battleField" 
         onDrop      = {e => placeShip(e)}
         onDragOver  = {e => e.preventDefault()}>
        {battleShips}
    </div>
  )
}
