import {positionInMatrix} from '../accessory-functions';

const setVerticalShipInMatrix = ({matrix}, {top, left, decksNum}) => {
    
  const colIndex = positionInMatrix(left);
  let i = 0;
  
  return matrix.map((row, index) => {
    if(index === positionInMatrix(top) && i < decksNum) {

      row = row.map((item, idx) => {

        if(idx === colIndex) {

          item = {type: 'deck'};
        }
        return item;
      });
      
      i++;
      top += 33;
    }
    return row;
  });  
}

export default setVerticalShipInMatrix;
