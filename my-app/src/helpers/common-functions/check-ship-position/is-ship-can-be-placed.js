const isShipCanBePlaced = (
  { matrix },
  { shipZoneTop, 
    shipZoneLeft,
    shipZoneBottom, 
    shipZoneRight },
    newMatrix) => {
  
  if(newMatrix) matrix = newMatrix;
  
  for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
    for(let j = shipZoneLeft; j <= shipZoneRight; j++) {
      
      if(matrix[i][j].type === 'deck') {
        return false;
      }
    }
  }
  return true;
}

export default isShipCanBePlaced;
 