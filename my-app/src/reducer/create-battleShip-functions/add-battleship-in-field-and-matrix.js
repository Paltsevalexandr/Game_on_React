import moveCheckingShipToBattleField from './move-checking-ship-to-battlefield';
import checkShipPosition from './check-ship-position';
import isBattleShip from './is-battle-ship';
import moveBattleShip from './move-battle-ship';
import setShipInMatrix from '../matrix-functions/set-functions/set-ship-in-matrix';

const addBattleShipInFieldAndMatrix = (state, action) => {
  const {battleShips} = state;

  if(checkShipPosition(state, action)) {

    if(isBattleShip(state)) {
      const {updatedShip, battleShips} = moveBattleShip(state, action);
      console.log(state)
      return {
        ...state,
        battleShips,
        matrix: setShipInMatrix(state, updatedShip)
      };

    }else {
      const {newBattleShip, checkingShips} = moveCheckingShipToBattleField(state, action);
      
      return {
        ...state,
        battleShips: [...battleShips, newBattleShip],
        checkingShips,
        matrix: setShipInMatrix(state, newBattleShip)
      }
    }
    
  }else if(!checkShipPosition(state, action)) {
    return state;
  }
}

export default addBattleShipInFieldAndMatrix;