import React from 'react';
import {BattleShip} from './battleShip.js';

export function BattleField(props) {
  let battleShips;
  if(props.battleShips.length > 0) {
    battleShips = props.battleShips.map((item, index) => {
      return(
        <BattleShip
          key  = {index}
          ship = {item}
          createCurrentShip    = {props.createCurrentShip}
          canPlaceShip         = {props.canPlaceShip}
          getCurrenShipOffsets = {props.getCurrenShipOffsets}
          foundForbiddenCells  = {props.foundForbiddenCells}
          rotateShip           = {props.rotateShip}
        />
      );
    });
  }
  function isBattleShip() {
    let isShip = false;
    for(let ship of props.battleShips) {
      if(ship.shipName === props.currentShip.name) {
        return isShip = true;
      }
    }
    return isShip;
    //return props.battleShips.find(({ shipName }) => shipName === props.currentShipName);
  }
  function placeShip(e) {
    if(props.canPlaceShip === true) {
      isBattleShip() ? props.moveBattleShip(e) : props.addShip(e);
      props.deleteSelectedShip();
    }else if(props.canPlaceShip === false) {
      return;
    }
  }
  return(
    <div className   = "battleField" 
         onDrop      = {e => placeShip(e)}
         onDragOver  = {e => e.preventDefault()}>
        {battleShips}
    </div>
  )
}
