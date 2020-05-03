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

const rotateShip = (pageX, pageY) => {
  return {
    type: 'ROTATE_SHIP',
    pageX,
    pageY
  }
}
export {
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix,
  rotateShip
};