import calcGamerShipPosition from './calc-gamer-ship-position';

const calcShipPosition = (pageXY, offsetXY = 0, shipSize) => {

  const shipCoordinate = pageXY - offsetXY;
  let fieldIndent;

  if(shipCoordinate >= 595) {
      return shipCoordinate;

  }else if(shipCoordinate < 595) {
    fieldIndent = 132;

    if((shipCoordinate - fieldIndent) % 33 === 0
    && offsetXY === 0) {
      return shipCoordinate;
    }
    
    return calcGamerShipPosition(shipCoordinate, shipSize);
  }
}

export default calcShipPosition;
