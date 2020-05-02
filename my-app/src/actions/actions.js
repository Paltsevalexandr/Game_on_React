const addShip = () => {
  return {
    type: 'ADD_SHIP'
  }
}

const getCurrentShip = (ship, offsetX, offsetY) => {
  return {
    type: 'GET_CURRENT_SHIP',
    shipName: ship,
    offsetX,
    offsetY,
  }
}

const createBattleShip = (pageX, pageY) => {
  return {
    type: 'CREATE_BATTLE_SHIP',
    pageX,
    pageY
  }
}

const fillMatrix = ship => {
  return {
    type: 'FILL_MATRIX',
    ship
  }
}

export {
  addShip,
  getCurrentShip,
  createBattleShip,
  fillMatrix
};