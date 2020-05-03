import {
  calcShipDecksNumber,
  calcShipHeight,
  calcShipWidth,
  currentShipIsVertical
} from './calc-ship-props';

import addBattleShipInFieldAndMatrix from './create-battleShip-functions/add-battleship-in-field-and-matrix';
import deleteShipFromMatrix from './matrix-functions/delete-functions/delete-ship-from-matrix';
import updateBattleShipsAndMatrix from './rotate-ship-func/update-battleShips-and-matrix';

const updateGamerState = (state, action) => {

  if(state === undefined) {
    return {
      checkingShips: ['fourdeck1', 'threedeck1', 
        'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'], 
      battleShips: [],
      currentShip: {},
      matrix: Array(10).fill(Array(10).fill([]))
    }
  }
  
  const {gamerState} = state;

  switch(action.type) {
    case 'GET_CURRENT_SHIP':
      const {shipName} = action;
      const {battleShips} = gamerState;
      const isVertical = currentShipIsVertical(shipName, battleShips);

      return {
        ...gamerState,
        currentShip: {
          name: shipName,
          offsetX: action.offsetX,
          offsetY: action.offsetY,
          width: calcShipWidth(shipName, isVertical),
          height: calcShipHeight(shipName, isVertical),
          isVertical,
          decksNum: calcShipDecksNumber(shipName),
        }
      };
    
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
    
    default:
      return gamerState;
  }
}

export default updateGamerState;