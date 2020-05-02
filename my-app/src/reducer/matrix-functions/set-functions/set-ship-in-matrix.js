import setHorizontalShipInMatrix from './setHorizontalShipInMatrix';
import setVerticalShipInMatrix from './setVerticalShipInMatrix';

const setShipInMatrix = state => {
  const {currentShip: ship} = state;

  if(ship.isVertical === false) {
    setHorizontalShipInMatrix(state);

  }else if(ship.isVertical === true) {
    setVerticalShipInMatrix(state);
  }
}

export default setShipInMatrix;
