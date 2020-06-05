import createShip from './create-ship';

const createAllShips = (state, fieldLeft = 132, fieldTop = 132) => {
  let battleShips = [];
  let {checkingShips, matrix} = state;
  
  for(let ship of checkingShips) {
    
    const {newMatrix, currentShip} = createShip(matrix, ship, fieldLeft, fieldTop);
    
    battleShips.push(currentShip);
    matrix = newMatrix;
  }

  return {battleShips, matrix};
}

export default createAllShips;
