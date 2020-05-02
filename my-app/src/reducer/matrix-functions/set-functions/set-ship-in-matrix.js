import setHorizontalShipInMatrix from './set-horizontal-ship-in-matrix';
import setVerticalShipInMatrix from './set-vertical-ship-in-matrix';

const setShipInMatrix = (state, ship) => {

  if(ship.isVertical === false) {
    return setHorizontalShipInMatrix(state, ship);

  }else if(ship.isVertical === true) {
    return setVerticalShipInMatrix(state, ship);
  }
}

export default setShipInMatrix;
