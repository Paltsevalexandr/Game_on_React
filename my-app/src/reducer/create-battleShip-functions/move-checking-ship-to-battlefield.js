import addBattleShip from './add-battle-ship';
import deleteCheckingShip from './delete-checking-ship';

const moveCheckingShipToBattleField = (state, action) => {
  return {
    ...state,
    battleShips: addBattleShip(state, action),
    checkingShips: deleteCheckingShip(state)
  }
}

export default moveCheckingShipToBattleField;