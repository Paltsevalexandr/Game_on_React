import isShipCanBePlaced from '../check-ship-position/is-ship-can-be-placed';
import calcShipZoneBorders from '../check-ship-position/calc-ship-zone-borders';
import fixShipZoneBorders from '../check-ship-position/fix-ship-zone-borders';

const checkShipPosition = ({currentShip, matrix}, action, newMatrix, rotatedShip) => {
  
  const shipZone = fixShipZoneBorders( calcShipZoneBorders(currentShip, action, rotatedShip) );

  return isShipCanBePlaced({currentShip, matrix}, action, shipZone, newMatrix);
}

export default checkShipPosition;
