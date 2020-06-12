import React from 'react';

const BattleShips = ({
  gameStart,
  battleShips, 
  getCurrentShip, 
  deleteShipFromMatrix,
  rotateShip}) => {
  
  return (
    <>{
      battleShips.map(
        ({name, top, left, isVertical}, index) => {
        return(
          <div key = {index}

            className = {
              "ship " + name + " battleShip " + 
              ( isVertical 
              ? name.slice(0, -1) + 'Vertical' 
              : '' )
            }

            style = {{
              left: left + 'px', 
              top: top + 'px'
            }}

            onMouseDown   = {e => getCurrentShip(name, e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
            onDragStart   = {() => deleteShipFromMatrix()}
            onDoubleClick = {e => rotateShip(e.pageX, e.pageY)}
            draggable = 'true' />
        );
      })
    }</>
  );
}

export default BattleShips;
