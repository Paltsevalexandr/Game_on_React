import positionInMatrix from '../../matrix-functions/accessory-functions/calc-position-in-matrix';
import shipZoneSize from '../../matrix-functions/accessory-functions/calc-ship-zone';
import calcShipPosition from '../calc-ship-position';

const calcShipZone = (
  { currentShip: ship }, 
  { pageX, pageY },
    rotateShip ) => {

  const {offsetX, offsetY} = ship;
  
  if(rotateShip) ship = rotateShip;
  const {decksNum, width, height, isVertical} = ship;

  const shipLeft = calcShipPosition(pageX, offsetX, width);
  const shipTop = calcShipPosition(pageY, offsetY, height);

  const shipZoneTop = positionInMatrix(shipTop) - 1;
  const shipZoneLeft = positionInMatrix(shipLeft) - 1;
  let shipZoneRight = shipZoneSize(shipZoneLeft, decksNum);
  let shipZoneBottom = shipZoneTop + 2;
  
  if(isVertical === true) {
    shipZoneBottom = shipZoneSize(shipZoneTop, decksNum);
    shipZoneRight = shipZoneLeft + 2;
  }

  return {shipZoneRight, shipZoneBottom, shipZoneLeft, shipZoneTop};
}

export default calcShipZone;