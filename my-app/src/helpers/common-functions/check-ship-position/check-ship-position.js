import isShipCanBePlaced from './is-ship-can-be-placed';
import getShipZoneBorders from './get-ship-zone-borders';
import fixShipZoneBorders from './fix-ship-zone-borders';

const checkShipPosition = (state, action, newMatrix, rotatedShip) => {
  
  const shipZone = fixShipZoneBorders( getShipZoneBorders(state, action, rotatedShip) );

  return isShipCanBePlaced(state, shipZone, newMatrix);
}

export default checkShipPosition;
