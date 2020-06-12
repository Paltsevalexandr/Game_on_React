const createAllShips = () => {
  return {
    type: 'CREATE_ALL_SHIPS'
  }
}

const createLabel = (pageX, pageY) => {
  return {
    type: 'CREATE_LABEL',
    left: pageX,
    top: pageY
  }
}

const createOrDeleteHatching = (pageX, pageY) => {
  return {
    type: 'CREATE_OR_DELETE_HATCHING',
    left: pageX,
    top: pageY
  }
}

const getGamerFire = (pageX, pageY) => {
  return {
    type: 'GET_GAMER_FIRE',
    left: pageX,
    top: pageY
  }
}

export {
  createAllShips,
  createLabel,
  createOrDeleteHatching,
  getGamerFire,
}
