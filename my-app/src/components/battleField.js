import React from 'react';

export function BattleField({
  currentShip,
  battleShips,
  matrix,
  moveBattleShip, 
  addShip,
  deleteSelectedShip,
  calcShipPosition,
  positionInMatrix,
  createBattleShip,
  children}) {

  function setShipPosition(e, ship) {
    if(checkShipPosition(e, ship)) {
      isBattleShip() ? moveBattleShip(e) : addShip(e);
      deleteSelectedShip();
    }else if(!checkShipPosition(e, ship)) {
      return;
    }
  }

  function isBattleShip() {
    return battleShips.find(item => item.name === currentShip.name);
  }

  function checkShipPosition(e, ship) {
    let shipLeft = calcShipPosition(e.nativeEvent.pageX, ship.offsetX, ship.width);
    let shipTop = calcShipPosition(e.nativeEvent.pageY, ship.offsetY, ship.height);

    let shipZoneTop = positionInMatrix(shipTop) - 1;
    let shipZoneLeft = positionInMatrix(shipLeft) - 1;
    
    let shipZoneRight = shipZoneSize(shipZoneLeft, ship.decksNum);
    let shipZoneBottom = shipZoneTop + 2;

    if(ship.isVertical === true) {
      shipZoneBottom = shipZoneSize(shipZoneTop, ship.decksNum);
      shipZoneRight = shipZoneLeft + 2;
    }
    
    if(shipZoneTop < 0) {
      shipZoneTop = 0;
    }
    if(shipZoneLeft < 0) {
      shipZoneLeft = 0;
    }
    if(shipZoneBottom > 9) {
      shipZoneBottom = 9;
    }
    if(shipZoneRight > 9) {
      shipZoneRight = 9;
    }

    let result = true;
    for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
      for(let j = shipZoneLeft; j <= shipZoneRight; j++) {
        if(matrix[i][j].length > 0) {
          result = false;
          return result;
        }
      }
      if(result === false) {
        break;
      }
    }
    return result;
  }
  function shipZoneSize(coordinate, decksNum) {
    let result = coordinate + decksNum + 1;
    if(result > 9) {
      result = 9;
    }
    return result;
  }
  return(
    <div className   = "battleField" 
         onDrop      = {e => {
           setShipPosition(e, currentShip);
           createBattleShip(e.pageX, e.pageY);
          }}
         onDragOver  = {e => e.preventDefault()}>
          {children}
    </div>
  )
}
