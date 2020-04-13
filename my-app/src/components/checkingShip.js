import React from 'react';
// import PropTypes from 'prop-types';

export function CheckingShip(props) {
  /*let shipBorderColor = '';
  function setShipBorder(e) {
    if(props.currentShip === props.shipName) {
      console.log(props.shipName);
      return shipBorderColor = props.canPlaceShip ? ' green' : ' red';
    }else if(props.currentShip !== props.shipName || props.currentShip === null) {
      console.log(shipBorderColor);
      return shipBorderColor = '';
    }
  }
  let i = new Image();
  i.src = "../images/sprite.png";
  function startDrag(e) {
    e.dataTransfer.setDragImage(i, 10, 10);
  }*/
  return(
    <div 
      className = {"ship " + props.shipName}
      onDragStart = {e=>props.createCurrentShip(e, props.shipName)}
      onDrag = {e=>props.foundForbiddenCells(e)}
      draggable = 'true'>
    </div>
  )
}
