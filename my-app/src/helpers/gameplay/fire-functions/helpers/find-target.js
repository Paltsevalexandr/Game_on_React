const findTarget = (matrix, {rowNum, colNum}) => {

  if(rowNum < 0 || rowNum > 9 || colNum < 0 || colNum > 9) {
    return undefined;
  }

  return matrix[rowNum][colNum].type;
}

export default findTarget;
