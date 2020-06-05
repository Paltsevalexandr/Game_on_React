const calcLabelPosition = coordinate => {

  const excess = coordinate % 33;

  if((coordinate > 462 && coordinate < 594)
  || (coordinate < 132)) {
    return null;

  }
  return coordinate - excess;
}

export default calcLabelPosition;
