import calcGamerShipPosition from './calc-gamer-ship-position';
import calcComputerShipPosition from './calc-computer-ship-position';

const calcShipPosition = (pageXY, offsetXY = 0, shipSize) => {

  const shipCoordinate = pageXY - offsetXY;
  let fieldIndent;

  if(shipCoordinate >= 595) {
    fieldIndent = 595;
    
    if((shipCoordinate - fieldIndent) % 33 === 0
    && offsetXY === 0) {
      
      /*if(shipCoordinate >= (595 + 297 - shipSize)) {
        return 595 + 297 - shipSize;
      }*/
      return shipCoordinate;
    }
    return calcComputerShipPosition(shipCoordinate, shipSize);


  }else if(shipCoordinate < 595) {
    fieldIndent = 132;

    if((shipCoordinate - fieldIndent) % 33 === 0
    && offsetXY === 0) {
      /*if(shipCoordinate >= (132 + 297 - shipSize)) {
        return 132 + 297 - shipSize;
      }*/
      return shipCoordinate;
    }
    
    return calcGamerShipPosition(shipCoordinate, shipSize);
  }
}

export default calcShipPosition;
