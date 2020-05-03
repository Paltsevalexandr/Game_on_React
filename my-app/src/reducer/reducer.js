import {
  calcShipDecksNumber,
  calcShipHeight,
  calcShipWidth,
  currentShipIsVertical
} from './calc-ship-props';

import addBattleShipInFieldAndMatrix from './create-battleShip-functions/add-battleship-in-field-and-matrix';
import deleteShipFromMatrix from './matrix-functions/delete-functions/delete-ship-from-matrix';
import updateBattleShipsAndMatrix from './rotate-ship-func/update-battleShips-and-matrix';

const initialState = {
  checkingShips: ['fourdeck1',
  'threedeck1', 'threedeck2', 'twodeck1',
  'twodeck2', 'twodeck3', 'onedeck1',
  'onedeck2', 'onedeck3', 'onedeck4'], 
  battleShips: [],
  currentShip: {},
  matrix: Array(10).fill(Array(10).fill([])),
  pageX: '',
  pageY: '',
};

// height and width of cells = 33px
// battleField top = 132px
// battleField left = 132px

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SHIP':
      console.log(state);
      return state;
    
    case 'GET_CURRENT_SHIP':
      const shipName = action.shipName;
      const {battleShips} = state;
      const isVertical = currentShipIsVertical(shipName, battleShips);

      return {
        ...state,
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
    
    default:
      return state;
  }
}

export default reducer;