import moveCheckingShipToBattleField from './move-checking-ship-to-battlefield';
import checkShipPosition from './check-ship-position';
import isBattleShip from './is-battle-ship';
import moveBattleShip from './move-battle-ship';

const createBattleShip = (state, action) => {
  if(checkShipPosition(state, action)) {

    if(isBattleShip(state)) {
      return moveBattleShip(state, action);
    } else {
      return moveCheckingShipToBattleField(state, action);
    }
    
  }else if(!checkShipPosition(state, action)) {
    return state;
  }
}

export default createBattleShip;