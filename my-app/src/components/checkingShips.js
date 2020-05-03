import React from 'react';

export const CheckingShips = ({checkingShips, getCurrentShip}) => {
  let ships = checkingShips.map((ship, index) => {
    return(
      <div 
        className = {"ship " + ship}
        draggable = 'true' key = {index}
        onMouseDown = {e => getCurrentShip(ship, e.nativeEvent.offsetX, e.nativeEvent.offsetY)}>
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
