import calcShipZone from "./calc-ship-zone";

const isRotateShipBeyondField = ({currentShip}, action) => {
  const {decksNum} = currentShip;
  const {shipZoneLeft, shipZoneTop} = calcShipZone({currentShip}, action);
  
  if(shipZoneTop + decksNum > 9
  || shipZoneLeft + decksNum > 9){
    
    return false;
  }
  return true
}
  
export default isRotateShipBeyondField;