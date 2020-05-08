import createRotatedShip from './create-rotated-ship';
import {deleteShipFromMatrix} from '../../common-functions/matrix-functions';
import {checkShipPosition, isRotateShipBeyondField} from '../../common-functions/check-ship-position';

const rotateShip = (state, action) => {
  const matrixWithoutCurrentShip = deleteShipFromMatrix(state);
  const {battleShips} = state;
  const rotatedShip = createRotatedShip(state);

  if(checkShipPosition(state, action, matrixWithoutCurrentShip, rotatedShip)
  && isRotateShipBeyondField(rotatedShip)) {

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
