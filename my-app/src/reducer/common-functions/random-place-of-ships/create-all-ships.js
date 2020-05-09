import createShip from './create-ship';

const createAllShips = (state, fieldLeft, fieldTop) => {
  let battleShips = [];
  let {checkingShips, matrix} = state;
  
  for(let ship of checkingShips) {
    console.log(fieldLeft)
    const {newMatrix, currentShip} = createShip(matrix, ship, fieldLeft, fieldTop);
    
    battleShips.push(currentShip);
    matrix = newMatrix;
  }

  return {battleShips, matrix};
}

export default createAllShips;