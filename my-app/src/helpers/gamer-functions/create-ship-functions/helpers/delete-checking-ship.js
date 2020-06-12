const deleteCheckingShip = state => {
  const {checkingShips, currentShip} = state;
  return checkingShips.filter(item => item !== currentShip.name);
}

export default deleteCheckingShip;