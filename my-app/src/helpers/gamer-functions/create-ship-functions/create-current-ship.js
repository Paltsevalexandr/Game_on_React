import {
  calcShipDecksNumber,
  calcShipHeight,
  calcShipWidth,
  currentShipIsVertical
} from '../../common-functions/calc-ship-props';

const createCurrentShip = (state, {shipName, offsetX, offsetY}) => {
  const {battleShips} = state;
  const isVertical = currentShipIsVertical(shipName, battleShips);
    
    return {
      ...state,
      currentShip: {
        name: shipName,
        offsetX: offsetX,
        offsetY: offsetY,
        width: calcShipWidth(shipName, isVertical),
        height: calcShipHeight(shipName, isVertical),
        isVertical,
        decksNum: calcShipDecksNumber(shipName),
      }
    };
}

export default createCurrentShip;