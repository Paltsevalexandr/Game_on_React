import deleteHorizontalShipFromMatrix from './delete-horizontal-ship-from-matrix';
import deleteVerticalShipFromMatrix from '';

const deleteShipFromMatrix = state => {
  const {battleShips, currentShip} = state

  for(let ship of battleShips) {

    if(ship.name === currentShip.name && ship.isVertical === false) {
      deleteHorizontalShipFromMatrix(state, ship);

    }else if(ship.name === currentShip.name && ship.isVertical === true) {
      deleteVerticalShipFromMatrix(state, ship);
    }
  }
}

export default deleteShipFromMatrix;
