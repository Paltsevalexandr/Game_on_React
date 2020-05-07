const isShipTouchRest = (
    matrix,
  { shipZoneTop, 
    shipZoneLeft,
    shipZoneBottom, 
    shipZoneRight },
    newMatrix) => {
  
  if(newMatrix) matrix = newMatrix;
  
  for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
    for(let j = shipZoneLeft; j <= shipZoneRight; j++) {
      
      if(i > 9 || j > 9) return false; // check need it or not

      if(matrix[i][j].length > 0) {
        return false;
      }
    }
  }
  return true;
}

export default isShipTouchRest;