import {positionInMatrix} from '../accessory-functions';

const deleteHorizontalShipFromMatrix = ({matrix}, {top, left, decksNum}) => {
  const rowNum = positionInMatrix(top);

  return matrix.map((row, index) => {
    if(index === rowNum) {

      let i = 0;
      row = row.map((item, idx) => {

        if(idx === positionInMatrix(left)
        && i < decksNum) {
          
          item = {type: null, isHurt: false};
          left += 33;
          i++;
          return item;
        }
        return item;
      });
    }
    return row;
  });
}

export default deleteHorizontalShipFromMatrix;
