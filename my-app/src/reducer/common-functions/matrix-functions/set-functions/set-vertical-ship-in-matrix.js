import {positionInMatrix} from '../accessory-functions';

const setVerticalShipInMatrix = ({matrix}, ship) => {
    
  let topIndent = ship.top;
  const shipColIndex = positionInMatrix(ship.left);
  
  let i = 0;
  
  return matrix.map((row, indexRow) => {
    if(indexRow === positionInMatrix(topIndent) && i < ship.decksNum) {
      row = row.map((item, indexColumn) => {
        if(indexColumn === shipColIndex) {
          item = [ship.left, topIndent, {isHurt: false}];
          return item;
        }
        return item;
      });
      i++;
      topIndent += 33;
    }
    return row;
  });  
}

export default setVerticalShipInMatrix;
