const calcGamerShipPosition = (shipCoordinate, shipSize) => {

  if(shipCoordinate <= 155) {
    return shipCoordinate = 132;

  }else if(shipCoordinate >= (132 + 330 - shipSize)) {
    return shipCoordinate = (462 - shipSize);

  }else {
    let excess = shipCoordinate % 33;
    if(excess > 20) return shipCoordinate + (33 - excess);
    if(excess <= 20) return shipCoordinate - excess;
  }

  return shipCoordinate;
}

export default calcGamerShipPosition;
