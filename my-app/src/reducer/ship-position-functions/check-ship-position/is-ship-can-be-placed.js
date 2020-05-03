import isRotateShipBeyondField from "./is-ship-beyond-field";
import isShipTouchRest from './is-ship-touch-rest';

const isShipCanBePlaced = (state, action, shipZone, newMatrix) => {
  let shipBeyondField = true;
  if(newMatrix) shipBeyondField = isRotateShipBeyondField(state, action);

  if(isShipTouchRest(state, shipZone, newMatrix) && shipBeyondField) {
    return true;
    
  }
  return false;
}
export default isShipCanBePlaced;
 