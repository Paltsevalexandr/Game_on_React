const calcComputerShipPosition = (shipCoordinate, shipSize) => {
  
  if(shipCoordinate > 595 + 33) {
  let excess = (shipCoordinate - 595) % 33;

  if(shipCoordinate >= (297 + 595 - shipSize)) {
    return 297 + 595 - shipSize;

  }else if(excess > 0) {
    return shipCoordinate -= excess;
  }

  }else if(shipCoordinate >= 595 + 18
        && shipCoordinate <= 595 + 33) {
    return shipCoordinate = 595 + 33;
    
  }else if(shipCoordinate < 595 + 18) {
    return shipCoordinate = 595;
  }
  return shipCoordinate;
}

export default calcComputerShipPosition;
