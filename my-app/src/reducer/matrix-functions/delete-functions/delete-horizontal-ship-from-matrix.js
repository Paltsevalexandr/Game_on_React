import positionInMatrix from '../accessory-functions/position-in-matrix';

const deleteHorizontalShipFromMatrix = (state, ship) => {
  const {matrix} = state;
  let rowNum = positionInMatrix(ship.top);
  let leftIndent = ship.left;

  const updateMatrix = matrix.map((row, index) => {
    if(index === rowNum) {
      let i = 0;
      row = row.map((item, colNum) => {

        if(colNum === positionInMatrix(leftIndent)
        && i < ship.decksNum) {
          
          item = [];
          leftIndent += 33;
          i++;
          return item;
        }
        return item;
      });
    }
    return row;
  });

  return updateMatrix;
}

export default deleteHorizontalShipFromMatrix;