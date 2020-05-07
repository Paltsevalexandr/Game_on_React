import {positionInMatrix} from '../accessory-functions';

const deleteVerticalShipFromMatrix = (state, ship) => {
  const {matrix} = state;
  let topIndent = ship.top;
  let shipColIndex = positionInMatrix(ship.left);

  let i = 0;
  let updateMatrix = matrix.map((row, indexRow) => {
    if(indexRow === positionInMatrix(topIndent)
    && i < ship.decksNum) {
      row = row.map((item, indexColumn) => {

        if(indexColumn === shipColIndex) {
          item = [];
          return item;
        }
        return item;
      });
      
      i++;
      topIndent += 33;
    }
    return row;
  });

  return updateMatrix;
}

export default deleteVerticalShipFromMatrix;