const checkShotTarget = (matrix, {colNum, rowNum}) => {
   
   return !matrix[rowNum][colNum].marked;
}

export default checkShotTarget;
