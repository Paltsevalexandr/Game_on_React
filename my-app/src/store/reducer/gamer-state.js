import {
  addBattleShipInFieldAndMatrix, 
  createCurrentShip
} from '../../helpers/gamer-functions/create-ship-functions';

import {deleteShipFromMatrix} from '../../helpers/common-functions/matrix-functions';
import updateBattleShipsAndMatrix from '../../helpers/gamer-functions/rotate-ship-func/update-battleShips-and-matrix';
import createAllShips from '../../helpers/common-functions/random-place-of-ships/create-all-ships';
import computerFire from '../../helpers/gameplay/fire-functions/computer-fire';

const initialState = {
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
        .fill({type: null})),
  defeatedShips: {
    currentTarget: {name: undefined, decks: [], borders: []},
    destroyedShips: []
  }
}
const gamerState = (state = initialState, action) => {
  
  switch(action.type) {
    case 'GET_CURRENT_SHIP':
      return createCurrentShip(state, action)
    
    case 'CREATE_BATTLE_SHIP':
      return addBattleShipInFieldAndMatrix(state, action); 

    case 'DELETE_SHIP_FROM_MATRIX':
      return {
        ...state,
        matrix: deleteShipFromMatrix(state)
      }

    case 'ROTATE_SHIP':
      const {updateBattleShips, updateMatrix} = updateBattleShipsAndMatrix(state, action);
      return {
        ...state,
        battleShips: updateBattleShips,
        matrix: updateMatrix
      }

    case 'RANDOM_SHIPS_PLACEMENT':
      const {battleShips, matrix} = createAllShips(state);
      return {
        ...state,
        battleShips,
        matrix 
      };
    
    case 'GET_COMPUTER_FIRE':
      const fieldIndents = {fieldTop: 132, fieldLeft: 132};
      return computerFire(state, fieldIndents);
     
    default:
      return state;
  }
}

export default gamerState;
