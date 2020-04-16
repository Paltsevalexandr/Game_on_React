import React from 'react';
// import PropTypes from 'prop-types';

export class CheckingShips extends React.Component{
  constructor(props) {
    super(props);
    this.state = {checkingShips: ['fourdeck1',
    'threedeck1', 'threedeck2', 'twodeck1',
    'twodeck2', 'twodeck3', 'onedeck1',
    'onedeck2', 'onedeck3', 'onedeck4'],};
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
  render() {
    let ships = props.checkingShips.map((item, index)=> {
      return(
        <div 
          className = {"ship " + item}
          draggable = 'true' key = {index}

          onMouseDown = {e => props.createCurrentShip(e, item)}
          onDrag      = {e => props.foundForbiddenCells(e)}>
        </div>
      );
    });
    return(
      <>{ships}</>
    );
  }
}
