import React from 'react';

export const BattleShips = ({
  battleShips, 
  getCurrentShip, 
  deleteShipFromMatrix,
  rotateShip}) => {

  if(battleShips.length > 0) {
    battleShips = battleShips.map((ship, index) => {
      return(
        <div 
          className = {"ship " + ship.name + " battleShip " + 
          (ship.isVertical ? (ship.name.slice(0, -1) + 'Vertical') : '')}

          style = {{left: ship.left + 'px', 
                    top: ship.top + 'px'}}

          onMouseDown   = {e => getCurrentShip(ship.name, e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
          onDragStart   = {() => deleteShipFromMatrix()}
          onDoubleClick = {e => rotateShip(e.pageX, e.pageY)}
          draggable = 'true'
          key = {index}>
        </div>
      );
    });
  }
  return(
    <>{battleShips}</>
  )
}
