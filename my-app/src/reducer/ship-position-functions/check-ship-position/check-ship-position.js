import isShipCanBePlaced from './is-ship-can-be-placed';
import calcShipZone from './calc-ship-zone';

const checkShipPosition = (state, action, rotatedShip, newMatrix) => {
  const shipZone = calcShipZone(state, action, rotatedShip);

  return isShipCanBePlaced(state, shipZone, newMatrix);
}

export default checkShipPosition;
