import React from 'react';

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
  return(
    <div className   = "battleField" 
         onDrop      = {e => placeShip(e)}
         onDragOver  = {e => e.preventDefault()}
         onClick     = {e => props.getDotCoordinates(e)}>
          {props.children}
    </div>
  )
}
