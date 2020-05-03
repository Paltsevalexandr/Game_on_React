const calcShipPosition = (pageXY, offsetXY = 0, shipSize) => {
  let shipCoordinate = pageXY - offsetXY;

  if(shipCoordinate > 165) {
    let excess = (shipCoordinate - 132) % 33;

    if(excess === 0 && offsetXY === 0) {
      return shipCoordinate;

    }else if(shipCoordinate >= (462 - shipSize)) {
      return shipCoordinate = (462 - shipSize);

    }else if(excess > 0) {
      return shipCoordinate -= excess;
    }

  }else if(shipCoordinate >=155 && shipCoordinate <= 165) {
    return shipCoordinate = 165;
    
  }else if(shipCoordinate < 155) {
    return shipCoordinate = 132;
  }
  return shipCoordinate;
}

export default calcShipPosition;
