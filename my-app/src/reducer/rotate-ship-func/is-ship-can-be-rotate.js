const isShipCanRotate = (e, ship) => {
  let shipLeft = calcShipPosition(e.nativeEvent.pageX, ship.offsetX, ship.width);
  let shipTop = calcShipPosition(e.nativeEvent.pageY, ship.offsetY, ship.height);

  let shipZoneTop = positionInMatrix(shipTop) - 1;
  let shipZoneLeft = positionInMatrix(shipLeft) - 1;
  let shipZoneRight;
  let shipZoneBottom;

  if(ship.isVertical === false) {
    shipZoneBottom = shipZoneSize(shipZoneTop, ship.decksNum);
    shipZoneRight = shipZoneLeft + 2;
  }else if(ship.isVertical === true) {
    shipZoneRight = shipZoneSize(shipZoneLeft, ship.decksNum);
    shipZoneBottom = shipZoneTop + 2;
  }
  
  if(shipZoneTop < 0) {
    shipZoneTop = 0;
  }
  if(shipZoneLeft < 0) {
    shipZoneLeft = 0;
  }
  if(shipZoneBottom > 9) {
    shipZoneBottom = 9;
  }
  if(shipZoneRight > 9) {
    shipZoneRight = 9;
  }

  let result = true;
  for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
    for(let j = shipZoneLeft; j <= shipZoneRight; j++) {
      if(state.matrix[i][j].length > 0) {
        result = false;
        return result;
      }
    }
    if(result === false) {
      break;
    }
  }
  if(result === true) {
    deleteSelectedShip();
  }
  return result;
}
shipZoneSize = (coordinate, decksNum) => {
  let result = coordinate + decksNum + 1;
  if(result > 9) {
    result = 9;
  }
  return result;
}