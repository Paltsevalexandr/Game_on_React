import isShipTouchRest from './is-ship-touch-rest';

const isShipCanBePlaced = (state, shipZone, newMatrix) => {  
  
  if(isShipTouchRest(state, shipZone, newMatrix)) {

    return true;
  }
  return false;
}

export default isShipCanBePlaced;
 