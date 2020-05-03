calcRandomShipPosition = battleFieldIndent => {
  let random = Math.floor(Math.random() * 10);
  let indent = random * 33 + battleFieldIndent;
  return indent;
}

export default calcRandomShipPosition;