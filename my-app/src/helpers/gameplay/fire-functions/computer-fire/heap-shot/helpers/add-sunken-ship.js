import determineShipName from './determine-ship-name';

const addSunkenShip = ({currentTarget: {decks}, destroyedShips}) => {
   const name = determineShipName(decks);
   destroyedShips.push(name);
   return destroyedShips;
}

export default addSunkenShip;
