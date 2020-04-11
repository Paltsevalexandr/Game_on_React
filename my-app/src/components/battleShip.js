import React from 'react';
// import PropTypes from 'prop-types';

export function BattleShip(props) {
  return(
    <div 
      className = {"ship " + props.ship.shipName + " battleShip " + 
      (props.ship.isRotate ? (props.ship.shipName.slice(0, -1) + 'Vertical') : '')}

      style = {{left: props.ship.leftIndent, top: props.ship.topIndent}}

      onDragStart = {e => {
        props.handleShip(props.ship.shipName);
        props.getCurrenShipOffsets(e)
      }}
      onClick = {() => props.handleShip(props.ship.shipName)}
      onDrag = {e => props.foundForbiddenCells(e)}
      onDoubleClick = {() => props.rotateShip()}
      draggable = 'true'>
    </div>
  )
}
