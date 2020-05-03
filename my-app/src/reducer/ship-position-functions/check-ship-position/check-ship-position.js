import isShipCanBePlaced from './is-ship-can-be-placed';
import calcShipZone from './calc-ship-zone';
import fixShipZoneBorders from './fix-ship-zone-borders';

const checkShipPosition = (state, action, newMatrix, rotatedShip) => {
  
  const shipZone = fixShipZoneBorders( calcShipZone(state, action, rotatedShip) );

  return isShipCanBePlaced(state, action, shipZone, newMatrix);
}

export default checkShipPosition;
