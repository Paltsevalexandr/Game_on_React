import isRotateShipBeyondField from "./is-rotated-ship-beyond-field";
import isShipTouchRest from './is-ship-touch-rest';

const isShipCanBePlaced = ({currentShip, matrix}, action, shipZone, newMatrix) => {
  
  let shipBeyondField = true;
  if(newMatrix) shipBeyondField = isRotateShipBeyondField(currentShip, action);

  if(isShipTouchRest(matrix, shipZone, newMatrix) 
  && shipBeyondField) {
    
    return true;
    
  }
  return false;
}
export default isShipCanBePlaced;
 