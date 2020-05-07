import isShipCanBePlaced from './is-ship-can-be-placed';
import getShipZoneBorders from './get-ship-zone-borders';
import fixShipZoneBorders from './fix-ship-zone-borders';

const checkShipPosition = ({currentShip, matrix}, action, newMatrix, rotatedShip) => {
  
  const shipZone = fixShipZoneBorders( getShipZoneBorders(currentShip, action, rotatedShip) );

  return isShipCanBePlaced({currentShip, matrix}, action, shipZone, newMatrix);
}

export default checkShipPosition;
