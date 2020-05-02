import React from 'react';
// import PropTypes from 'prop-types';

export function BattleShips(props) {
  let battleShips;
  if(props.battleShips.length > 0) {
    battleShips = props.battleShips.map((ship, index) => {
      return(
        <div 
          className = {"ship " + ship.name + " battleShip " + 
          (ship.isVertical ? (ship.name.slice(0, -1) + 'Vertical') : '')}

          style = {{left: ship.left + 'px', 
                    top: ship.top + 'px'}}
          draggable = 'true'
          key = {index}

          onMouseDown   = {e => {props.createCurrentShip(e, ship.name);props.getCurrentShip(ship.name, e.nativeEvent.offsetX, e.nativeEvent.offsetY)}}
          onDragStart   = {() => props.deleteShipFromMatrix()}
          onDoubleClick = {() => props.rotateShip()}>
        </div>
      );
    });
  }
  return(
    <>{battleShips}</>
  )
}
