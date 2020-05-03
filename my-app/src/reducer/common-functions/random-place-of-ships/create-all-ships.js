import createShip from './create-ship';

const createAllShips = ({checkingShips}) => {
  let battleShips = [];

  for(let ship of checkingShips) {
    battleShips.push(createShip(ship, 595, 132));
  }

  return battleShips;
}

export default createAllShips;