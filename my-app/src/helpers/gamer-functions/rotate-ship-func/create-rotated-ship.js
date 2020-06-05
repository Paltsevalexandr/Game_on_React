import {calcShipHeight, calcShipPosition} from '../../common-functions/calc-ship-props';

const createRotatedShip = ({battleShips, currentShip}) => {
  let battleShip = battleShips.find(ship => ship.name === currentShip.name);
  
  return battleShip = {
    
      name: battleShip.name,
      isVertical: !battleShip.isVertical,
      decksNum: battleShip.decksNum,

      width: battleShip.height,
      height: calcShipHeight(battleShip.name, !battleShip.isVertical),
      left: calcShipPosition(battleShip.left, 0, battleShip.width),
      top: calcShipPosition(battleShip.top, 0, battleShip.height)    
    }
}

export default createRotatedShip;