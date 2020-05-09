const createAllShips = () => {
  return {
    type: 'CREATE_ALL_SHIPS'
  }
}

const createDot = (pageX, pageY) => {
  return {
    type: 'CREATE_DOT',
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
  createDot,
  show
}
