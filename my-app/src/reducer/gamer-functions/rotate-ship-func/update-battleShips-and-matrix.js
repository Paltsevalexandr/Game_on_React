import rotateShip from './rotate-ship';
import {setShipInMatrix, deleteShipFromMatrix} from '../../common-functions/matrix-functions';

const updateBattleShipsAndMatrix = (state, action) => {
  const {currentShip} = state;
  const battleShips = rotateShip(state, action);
  const matrix = deleteShipFromMatrix(state);
  const rotatedShip = battleShips.find(ship => ship.name === currentShip.name);

  return {
    updateBattleShips: battleShips,
    updateMatrix: setShipInMatrix({matrix}, rotatedShip),
  }
}

export default updateBattleShipsAndMatrix;