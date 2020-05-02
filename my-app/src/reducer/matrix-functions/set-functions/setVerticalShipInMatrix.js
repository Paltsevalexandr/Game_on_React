import positionInMatrix from '../accessory-functions/position-in-matrix';

const setVerticalShipInMatrix = ({currentShip: ship, matrix}) => {
  let topIndent = ship.top;
  let shipColIndex = this.positionInMatrix(ship.left);
  
  let i = 0;
    let updateMatrix = matrix.map((row, indexRow) => {
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
    return updateMatrix;
  
}

export default setVerticalShipInMatrix;
