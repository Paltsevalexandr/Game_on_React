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

const makeHatching = (pageX, pageY) => {
  return {
    type: 'MAKE_HATCHING',
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

const show = () => {
  return {
    type: 'showState'
  }
}

export {
  createAllShips,
  createLabel,
  makeHatching,
  getGamerFire,
  show
}
