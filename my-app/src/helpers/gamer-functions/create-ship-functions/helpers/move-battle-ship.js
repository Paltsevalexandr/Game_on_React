import {calcShipPosition} from '../../../common-functions/calc-ship-props';

const moveBattleShip = ({battleShips, currentShip}, {pageX, pageY}) => {
  let updatedShip;

  const updatedBattleShips = battleShips.map(item => {
    if(item.name === currentShip.name){
      item.left = calcShipPosition(pageX, currentShip.offsetX, item.width);
      item.top = calcShipPosition(pageY, currentShip.offsetY, item.height);

      updatedShip = item;
      return item;
    }else {
      return item;
    }
  });

  return {
    battleShips: updatedBattleShips,
    updatedShip,
  };
}

export default moveBattleShip;
