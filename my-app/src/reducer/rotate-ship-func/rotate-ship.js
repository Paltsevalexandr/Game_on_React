import createRotatedShip from './create-rotated-ship';
import checkShipPosition from '../ship-position-functions/check-ship-position/check-ship-position';
import deleteShipFromMatrix from '../matrix-functions/delete-functions/delete-ship-from-matrix';

const rotateShip = (state, action) => {
  const matrixWithoutCurrentShip = deleteShipFromMatrix(state);
  const {battleShips, currentShip} = state;
  const rotatedShip = createRotatedShip(state);

  if(checkShipPosition(state, action, rotatedShip, matrixWithoutCurrentShip)) {
    
    return battleShips.map(ship => {
      if(ship.name === currentShip.name) {
        ship = rotatedShip;
        return ship;
      }
      return ship;
    });
  }
  return battleShips;
}

export default rotateShip;
