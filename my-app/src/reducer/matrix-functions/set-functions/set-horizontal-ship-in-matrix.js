import positionInMatrix from '../accessory-functions/position-in-matrix';

const setHorizontalShipInMatrix = (state, ship) => {
  let {matrix} = state;
  let rowIndex = positionInMatrix(ship.top);
  let leftIndent = ship.left;
  
  matrix = matrix.map((row, indexRow) => {
    
    if(indexRow === rowIndex) {
      let i = 0;
      row = row.map((item, indexCol) => {

        if(indexCol === positionInMatrix(leftIndent)
        && i < ship.decksNum) {

          item = [leftIndent, ship.top, {isHurt: false}];
          leftIndent += 33;
          i++;
          return item;

        }
        return item;
      });
    }
    return row;
  });

  return matrix
}

export default setHorizontalShipInMatrix;