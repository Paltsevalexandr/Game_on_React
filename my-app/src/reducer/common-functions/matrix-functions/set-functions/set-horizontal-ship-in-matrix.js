import {positionInMatrix} from '../accessory-functions';

const setHorizontalShipInMatrix = ({matrix}, ship) => {

  let rowIndex = positionInMatrix(ship.top);
  let leftIndent = ship.left;
  
  return matrix.map((row, indexRow) => {
    
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
}

export default setHorizontalShipInMatrix;