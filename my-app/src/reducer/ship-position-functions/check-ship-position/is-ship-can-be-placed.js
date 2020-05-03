const isShipCanBePlaced = ({matrix}, shipZoneBorders, newMatrix) => {
  
  if(newMatrix) matrix = newMatrix;
  const {
    shipZoneTop, 
    shipZoneBottom, 
    shipZoneLeft, 
    shipZoneRight} = shipZoneBorders;

  for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
    for(let j = shipZoneLeft; j <= shipZoneRight; j++) {

      if(matrix[i][j].length > 0) {
        return false;
      }
    }
  }
  return true;
}

export default isShipCanBePlaced;