import React from 'react';
import {connect} from 'react-redux';
import {getCurrentShip} from '../../store/actions';

const CheckingShips = ({checkingShips, getCurrentShip}) => {

  let ships = checkingShips.map((ship, index) => {
    return(
      <div 
        className = {"ship " + ship}
        draggable = 'true' key = {index}
        onMouseDown = {e => getCurrentShip(ship, e.nativeEvent.offsetX, e.nativeEvent.offsetY)} />
    );
  });
  return(
    <>{ships}</>
  )
}

const mapStateToProps = ({gamerState: {checkingShips}}) => {
  return {
    checkingShips
  }
}

export default connect(mapStateToProps, {getCurrentShip})(CheckingShips);


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
