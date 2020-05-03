const isShipTouchRest = (
  { matrix },
  { shipZoneTop, 
    shipZoneLeft,
    shipZoneBottom, 
    shipZoneRight },
    newMatrix) => {
  
  if(newMatrix) matrix = newMatrix;

  for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
    for(let j = shipZoneLeft; j <= shipZoneRight; j++) {
    
      if(matrix[i][j].length > 0) {
        return false;
      }
    }
  }
  return true;
}

export default isShipTouchRest;