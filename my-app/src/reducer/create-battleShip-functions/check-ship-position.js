import positionInMatrix from '../matrix-functions/accessory-functions/position-in-matrix';
import shipZoneSize from '../matrix-functions/accessory-functions/calc-ship-zone';
import calcShipPosition from '../ship-position-functions/calc-ship-position';

const checkShipPosition = (state, action) => {
  const {pageX, pageY} = action;
  const {currentShip: ship, matrix} = state;
  console.log(ship)
  let shipLeft = calcShipPosition(pageX, ship.offsetX, ship.width);
  let shipTop = calcShipPosition(pageY, ship.offsetY, ship.height);

  let shipZoneTop = positionInMatrix(shipTop) - 1;
  let shipZoneLeft = positionInMatrix(shipLeft) - 1;
  
  let shipZoneRight = shipZoneSize(shipZoneLeft, ship.decksNum);
  let shipZoneBottom = shipZoneTop + 2;

  if(ship.isVertical === true) {
    shipZoneBottom = shipZoneSize(shipZoneTop, ship.decksNum);
    shipZoneRight = shipZoneLeft + 2;
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
      if(matrix[i][j].length > 0) {
        result = false;
        return result;
      }
    }
    if(result === false) {
      break;
    }
  }
  return result;
}

export default checkShipPosition;
