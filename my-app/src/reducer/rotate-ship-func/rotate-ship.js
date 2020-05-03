import createRotatedShip from './create-rotated-ship';
import checkShipPosition from '../ship-position-functions/check-ship-position/check-ship-position';
import deleteShipFromMatrix from '../matrix-functions/delete-functions/delete-ship-from-matrix';

const rotateShip = (state, action) => {
  const matrixWithoutCurrentShip = deleteShipFromMatrix(state);
  const {battleShips} = state;
  const rotatedShip = createRotatedShip(state);

  if(checkShipPosition(state, action, matrixWithoutCurrentShip, rotatedShip)) {

    return battleShips.map(ship => {
      if(ship.name === rotatedShip.name) {
        ship = rotatedShip;
        return ship;
      }
      return ship;
    });
  }
  return battleShips;
}

export default rotateShip;
