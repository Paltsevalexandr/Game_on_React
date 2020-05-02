const positionInMatrix = coordinate => {
  let positionNumberInMass = (coordinate - 132) / 33;
  return positionNumberInMass;
}

export default positionInMatrix;