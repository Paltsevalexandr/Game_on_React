import React from 'react';
// import PropTypes from 'prop-types';

export function BattleShip(props) {
  return(
    <div 
      className = {"ship " + props.ship.shipName + " battleShip " + 
      (props.ship.isVertical ? (props.ship.shipName.slice(0, -1) + 'Vertical ') : '')}

      style = {{left: props.ship.leftIndent + 'px', top: props.ship.topIndent + 'px'}}

      onDragStart = {e => {
        props.getCurrentShip(props.ship.shipName);
        props.getCurrenShipOffsets(e)
      }}
      onClick = {() => props.getCurrentShip(props.ship.shipName)}
      onDrag = {e => props.foundForbiddenCells(e)}
      onDoubleClick = {() => props.rotateShip()}
      draggable = 'true'>
    </div>
  )
}
