import {positionInMatrix} from '../accessory-functions';

const setHorizontalShipInMatrix = ({matrix}, {top, left, decksNum}) => {

  let rowIndex = positionInMatrix(top);
  
  return matrix.map((row, index) => {
    
    if(index === rowIndex) {
      let i = 0;

      row = row.map((item, idx) => {

        if(idx === positionInMatrix(left)
        && i < decksNum) {

          item = {type: 'deck', isHurt: false};
          left += 33;
          i++;
        }
        return item;
      });
    }
    return row;
  });
}

export default setHorizontalShipInMatrix;
