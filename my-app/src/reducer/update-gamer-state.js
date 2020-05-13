import {
  addBattleShipInFieldAndMatrix, 
  createCurrentShip
} from './gamer-functions/create-ship-functions';

import {deleteShipFromMatrix} from './common-functions/matrix-functions';
import updateBattleShipsAndMatrix from './gamer-functions/rotate-ship-func/update-battleShips-and-matrix';
import createAllShips from './common-functions/random-place-of-ships/create-all-ships';
import computerFire from './gameplay/fire-functions/computer-fire/computer-fire';

const updateGamerState = (state, action) => {

  if(state === undefined) {
    return {
      checkingShips: ['fourdeck1', 'threedeck1', 
        'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'], 
      battleShips: [],
      currentShip: {},
      labels: [],
      matrix: 
        Array(10)
        .fill(Array(10)
        .fill({type: null, isHurt: false}))
    }
  }
  
  const {gamerState} = state;

  switch(action.type) {
    case 'GET_CURRENT_SHIP':
      return createCurrentShip(gamerState, action)
    
    case 'CREATE_BATTLE_SHIP':
      return addBattleShipInFieldAndMatrix(gamerState, action); 

    case 'DELETE_SHIP_FROM_MATRIX':
      return {
        ...gamerState,
        matrix: deleteShipFromMatrix(gamerState)
      }

    case 'ROTATE_SHIP':
      const {updateBattleShips, updateMatrix} = updateBattleShipsAndMatrix(gamerState, action);
      return {
        ...gamerState,
        battleShips: updateBattleShips,
        matrix: updateMatrix
      }

    case 'RANDOM_SHIPS_PLACEMENT':
      const {battleShips, matrix} = createAllShips(gamerState);
      return {
        ...gamerState,
        battleShips,
        matrix 
      };
    
    case 'GET_COMPUTER_FIRE':
      const fieldIndents = {fieldTop: 132, fieldLeft: 132};
      return computerFire(gamerState, fieldIndents);
     
  
    case 'showState':
       console.log(gamerState);   
       return gamerState;   
      
    default:
      return gamerState;
  }
}

export default updateGamerState;
