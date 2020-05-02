import calcShipPosition from '../ship-position-functions/calc-ship-position';

const createBattleShip = ({currentShip}, {pageX, pageY}) => {
  return {
    name: currentShip.name,

    width: currentShip.width,
    height: currentShip.height,

    left: calcShipPosition(pageX, currentShip.offsetX, currentShip.width),
    top: calcShipPosition(pageY, currentShip.offsetY, currentShip.height),

    decksNum: currentShip.decksNum,
    isVertical: currentShip.isVertical,
  }
}

export default createBattleShip;
