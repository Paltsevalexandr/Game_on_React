export function calcShipPosition(shipPageXY, shipOffsetXY) {
  let shipCoordinates = shipPageXY - shipOffsetXY;
  shipCoordinates = correctPosition(shipCoordinates) + 'px';
  return shipCoordinates;
}