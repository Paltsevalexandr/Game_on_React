const currentShipIsVertical = (selectedShip, battleShips) => {
  let isVertical = false;
  let battleShip = battleShips.find(({name}) => name === selectedShip);

  if(battleShip) isVertical = battleShip.isVertical;

  return isVertical;
}

export default currentShipIsVertical;
