const addHatchingToMatrix = (matrix, rowNum, colNum) => {
  
  const prevType = matrix[rowNum][colNum].type;

  return matrix.map((row, index) => {
    if(index === rowNum) {
      
      return row.map((item, idx) => {

        if(idx === colNum) {

          item = {type: 'hatching', marked: true, prevType};
        }
        return item;
      });
    }
    return row;
  });
}

export default addHatchingToMatrix;
