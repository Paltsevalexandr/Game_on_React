import {
  calcRandomShipPosition, 
  randomShipIsVertical,
  calcShipDecksNumber,
  calcShipWidth,
  calcShipHeight
} from '../calc-ship-props';

import isRandomShipCanBePlaced from './is-random-ship-can-be-placed';

const createShip = (matrix, shipName, fieldLeft, fieldTop) => {

  let newBattleShip = {

    name: shipName,
    left: calcRandomShipPosition(fieldLeft),
    top: calcRandomShipPosition(fieldTop),
    isVertical: randomShipIsVertical(),
    decksNum: calcShipDecksNumber(shipName),
  }
  newBattleShip.width = calcShipWidth(shipName, newBattleShip.isVertical);
  newBattleShip.height = calcShipHeight(shipName, newBattleShip.isVertical);

  return isRandomShipCanBePlaced(
    {
      matrix, 
      currentShip: newBattleShip
    },
    fieldLeft,
    fieldTop
  );
}

export default createShip;