import React from 'react';
// import PropTypes from 'prop-types';

export const CheckingShips = ({checkingShips, createCurrentShip, getCurrentShip}) => {
  let ships = checkingShips.map((item, index) => {
    return(
      <div 
        className = {"ship " + item}
        draggable = 'true' key = {index}

        onMouseDown = {e => {
            createCurrentShip(e, item);
            getCurrentShip(item, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }}>
      </div>
    );
  });
  return(
    <>{ships}</>
  )
}


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
