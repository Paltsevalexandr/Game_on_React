import isShipCanBePlaced from './is-ship-can-be-placed';
import {fixShipZoneBorders, getShipZoneBorders} from './ship-zone-borders';

const checkShipPosition = (state, action, newMatrix, rotatedShip) => {
  
  const shipZone = fixShipZoneBorders( getShipZoneBorders(state, action, rotatedShip) );

  return isShipCanBePlaced(state, shipZone, newMatrix);
}

export default checkShipPosition;
