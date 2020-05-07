import createRotatedShip from './create-rotated-ship';
import checkShipPosition from '../../common-functions/check-ship-position/check-ship-position';
import {deleteShipFromMatrix} from '../../common-functions/matrix-functions';

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
