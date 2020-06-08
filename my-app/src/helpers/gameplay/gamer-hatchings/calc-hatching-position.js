const calcHatchingPosition = coordinate => {

  const excess = coordinate % 33;
  let result = coordinate - excess;

  if((coordinate > 462 && coordinate < 594)
  || (coordinate < 132)) {

    return null;
  }
  
  return result;
}

export default calcHatchingPosition;
