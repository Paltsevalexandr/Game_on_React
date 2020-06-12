import { placeCheckingShip, isBattleShip, moveBattleShip } from './helpers';
import {setShipInMatrix} from '../../common-functions/matrix-functions';
import {checkShipPosition} from '../../common-functions/check-ship-position';

const addBattleShipInFieldAndMatrix = (state, action) => {
  const {battleShips} = state;

  if(checkShipPosition(state, action)) {

    if(isBattleShip(state)) {
      const {updatedShip, battleShips} = moveBattleShip(state, action);

      return {
        ...state,
        battleShips,
        matrix: setShipInMatrix(state, updatedShip)
      };
    }

    const {newBattleShip, checkingShips} = placeCheckingShip(state, action);

    return {
      ...state,
      battleShips: [...battleShips, newBattleShip],
      checkingShips,
      matrix: setShipInMatrix(state, newBattleShip)
    }
  }
  return state;
}

export default addBattleShipInFieldAndMatrix;