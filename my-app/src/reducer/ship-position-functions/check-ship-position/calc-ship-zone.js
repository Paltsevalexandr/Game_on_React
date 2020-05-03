import positionInMatrix from '../../matrix-functions/accessory-functions/calc-position-in-matrix';
import shipZoneSize from '../../matrix-functions/accessory-functions/calc-ship-zone';
import calcShipPosition from '../calc-ship-position';
import fixShipZoneBorders from './fix-ship-zone-borders';

const calcShipZone = ({currentShip: ship}, {pageX, pageY}, rotatedShip) => {
  if(rotatedShip) ship = rotatedShip;
  
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

  return fixShipZoneBorders({shipZoneRight, shipZoneBottom, shipZoneLeft, shipZoneTop});
}

export default calcShipZone;