import rotateShip from './rotate-ship';
import deleteShipFromMatrix from '../matrix-functions/delete-functions/delete-ship-from-matrix';
import setShipInMatrix from '../matrix-functions/set-functions/set-ship-in-matrix';

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