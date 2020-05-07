import getShipZoneBorders from "./get-ship-zone-borders";

const isRotateShipBeyondField = (currentShip, action) => {
  const {decksNum, isVertical} = currentShip;
  const {shipZoneLeft, shipZoneTop} = getShipZoneBorders(currentShip, action);

  if((isVertical && shipZoneTop + decksNum > 9) 
  ||(!isVertical && shipZoneLeft + decksNum > 9)){
    
    return false;
  }
  return true
}
  
export default isRotateShipBeyondField;