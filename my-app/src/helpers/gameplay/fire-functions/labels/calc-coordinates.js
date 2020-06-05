const calcCoordinates = (
  {rowNum, colNum}, 
  {fieldLeft, fieldTop} ) => {
  
  return {
    top: rowNum * 33 + fieldTop,
    left: colNum * 33 + fieldLeft
  }
}

export default calcCoordinates;
