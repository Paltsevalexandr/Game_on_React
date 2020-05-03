const calcShipPosition = (shipPageXY, shipOffsetXY = 0, shipSize) => {
  let shipCoordinates = shipPageXY - shipOffsetXY;

  if(shipCoordinates > 165) {
    let excess = (shipCoordinates - 132) % 33;

    if(shipCoordinates >= (462 - shipSize)) {
      return shipCoordinates = (462 - shipSize);
    }else if(excess > 0) {
      return shipCoordinates -= excess;
    }

  }else if(shipCoordinates >=155 && shipCoordinates <= 165) {
    return shipCoordinates = 165;
  }else if(shipCoordinates < 155) {
    return shipCoordinates = 132;
  }
  return shipCoordinates;
}

export default calcShipPosition;
