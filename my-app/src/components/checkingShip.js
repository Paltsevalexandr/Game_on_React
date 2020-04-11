import React from 'react';
// import PropTypes from 'prop-types';

export function CheckingShip(props) {
  return(
    <div 
      className = {"ship " + props.shipName}
      onDragStart = {e=>{
        props.handleShip(props.shipName);
        props.getCurrenShipOffsets(e)
      }}
      onDrag = {e=>props.foundForbiddenCells(e)}
      draggable = 'true'>
    </div>
  )
}
