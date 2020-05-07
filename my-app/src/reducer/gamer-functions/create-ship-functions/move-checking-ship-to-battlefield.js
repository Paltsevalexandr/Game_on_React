import createBattleShip from './create-battle-ship';
import deleteCheckingShip from './delete-checking-ship';

const moveCheckingShipToBattleField = (state, action) => {
  return {
    newBattleShip: createBattleShip(state, action),
    checkingShips: deleteCheckingShip(state)
  }
}

export default moveCheckingShipToBattleField;