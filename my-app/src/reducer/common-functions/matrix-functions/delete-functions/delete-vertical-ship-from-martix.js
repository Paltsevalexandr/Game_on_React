import {positionInMatrix} from '../accessory-functions';

const deleteVerticalShipFromMatrix = ({matrix}, {top, left, decksNum}) => {

  let colIndex = positionInMatrix(left);
  let i = 0;

  return matrix.map((row, index) => {

    if(index === positionInMatrix(top)
    && i < decksNum) {

      row = row.map((item, idx) => {

        if(idx === colIndex) {
          item = {type: null, isHurt: false};
        }
        return item;
      });
      
      i++;
      top += 33;
    }
    return row;
  });
}

export default deleteVerticalShipFromMatrix;
