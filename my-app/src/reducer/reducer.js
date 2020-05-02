import {
  calcShipDecksNumber,
  calcShipHeight,
  calcShipWidth,
  currentShipIsVertical
} from './calc-ship-props';

import createBattleShip from './create-battleShip-functions/createBattleShip';

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
      return createBattleShip(state, action);
      
    case 'FILL_MATRIX':
      console.log('fill')
      return state;
    default:
      return state;
  }
}

export default reducer;