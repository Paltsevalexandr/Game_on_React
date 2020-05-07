import createShip from './create-ship';

const createAllShips = state => {
  let battleShips = [];
  let {checkingShips, matrix} = state;
  
  for(let ship of checkingShips) {
    
    const {newMatrix, currentShip} = createShip(matrix, ship, 595, 132);
    
    battleShips.push(currentShip);
    matrix = newMatrix;
  }

  return {battleShips, matrix};
}

export default createAllShips;