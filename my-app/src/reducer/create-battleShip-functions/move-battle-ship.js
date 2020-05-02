import calcShipPosition from '../ship-position-functions/calc-ship-position';

const moveBattleShip = (state, action) => {
  const {pageX, pageY} = action;
  const {battleShips, currentShip} = state;
  // const selectedShip;
  const updatedBattleShips = battleShips.map(item => {
    if(item.name === currentShip.name){
      item.left = calcShipPosition(pageX, currentShip.offsetX, item.width);
      item.top = calcShipPosition(pageY, currentShip.offsetY, item.height);

  // selectedShip = item;
      return item;
    }else {
      return item;
    }
  });

  return {
    ...state,
    battleShips: updatedBattleShips
  }
}

export default moveBattleShip;
