import setType from './set-type';

const addShotToMatrix = (matrix, {type}, {rowNum, colNum}) => {

  return matrix.map((row, index) => {

    if(index === rowNum) {
      return row.map((item, idx) => {

        if(idx === colNum) {
          
          item = {
            type: setType(type), 
          };
        }
        return item;
      });
    }
    return row;
  });
}

export default addShotToMatrix;
