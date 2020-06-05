const calcRandomShipPosition = battleFieldIndent => {

  let random = Math.floor(Math.random() * 10);

  return random * 33 + battleFieldIndent;
}

export default calcRandomShipPosition;