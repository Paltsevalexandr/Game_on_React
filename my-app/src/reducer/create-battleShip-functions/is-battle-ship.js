const isBattleShip = ({battleShips, currentShip}) => {
  return battleShips.find(item => item.name === currentShip.name);
}

export default isBattleShip;