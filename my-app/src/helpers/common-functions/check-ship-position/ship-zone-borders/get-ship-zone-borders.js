import calcShipZoneBorders from './calc-ship-zone-borders';
import {calcShipPosition} from '../../calc-ship-props';

const getShipZoneBorders = ({currentShip: ship}, action, rotatedShip) => {
  
  const {offsetX = 0, offsetY = 0} = ship;

  if(rotatedShip) ship = rotatedShip;
  
  let pageX = ship.left;
  let pageY = ship.top;

  if(action) {
    pageX = action.pageX;
    pageY = action.pageY;
  }
  
  const {width, height} = ship;

  const shipLeft = calcShipPosition(pageX, offsetX, width);
  const shipTop = calcShipPosition(pageY, offsetY, height);

  return calcShipZoneBorders(shipLeft, shipTop, ship);
}

export default getShipZoneBorders;