import deleteHorizontalShipFromMatrix from './delete-horizontal-ship-from-matrix';
import deleteVerticalShipFromMatrix from './delete-vertical-ship-from-martix';

const deleteShipFromMatrix = state => {
  const {battleShips, currentShip} = state;

  for(let ship of battleShips) {

    if(ship.name === currentShip.name &&
       ship.isVertical === false) {
         
      return deleteHorizontalShipFromMatrix(state, ship);

    }else if(
      ship.name === currentShip.name && 
      ship.isVertical === true) {

      return deleteVerticalShipFromMatrix(state, ship);
    }
  }
}

export default deleteShipFromMatrix;
