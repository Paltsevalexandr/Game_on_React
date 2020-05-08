import moveCheckingShipToBattleField from './move-checking-ship-to-battlefield';
import isBattleShip from './is-battle-ship';
import moveBattleShip from './move-battle-ship';
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

    const {newBattleShip, checkingShips} = moveCheckingShipToBattleField(state, action);
    return {
      ...state,
      battleShips: [...battleShips, newBattleShip],
      checkingShips,
      matrix: setShipInMatrix(state, newBattleShip)
    }
    
  }else if(!checkShipPosition(state, action)) {
    return state;
  }
}

export default addBattleShipInFieldAndMatrix;