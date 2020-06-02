const checkShotTarget = (matrix, {colNum, rowNum}) => {
   
   return (
      matrix[rowNum][colNum].type === 'deck' ||
      matrix[rowNum][colNum].type === null
   );
}

export default checkShotTarget;
