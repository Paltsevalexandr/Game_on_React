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



const show = () => {
  return {
    type: 'showState'
  }
}

export {
  createAllShips,
  createLabel,
  show
}
