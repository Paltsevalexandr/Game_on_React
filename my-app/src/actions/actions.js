const addShip = () => {
  return {
    type: 'ADD_SHIP'
  }
}

const getCurrentShip = (shipName, offsetX, offsetY) => {
  return {
    type: 'GET_CURRENT_SHIP',
    shipName,
    offsetX,
    offsetY,
  };
}

const createBattleShip = (pageX, pageY) => {
  return {
    type: 'CREATE_BATTLE_SHIP',
    pageX,
    pageY
  };
}

const deleteShipFromMatrix = ship => {
  return {
    type: 'DELETE_SHIP_FROM_MATRIX',
    ship
  }
}
export {
  addShip,
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix
};