const addLabelToMatrix = (matrix, {top, left, type}) => {

  const rowNumber = (top - 132) / 33;
  const colNumber = (left - 594) / 33;

  return matrix.map((row, index) => {
    if(index === rowNumber) {
      
      return row.map((item, idx) => {

        if(idx === colNumber) {

          item = {type};
          return item;
        }
        return item;
      });
    }
    return row;
  });
}

export default addLabelToMatrix;
