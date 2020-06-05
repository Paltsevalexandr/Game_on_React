const positionInMatrix = coordinate => {

  let fieldIndent = 132;
  
  if(coordinate >= 595) fieldIndent = 595;

  return (coordinate - fieldIndent) / 33;
}

export default positionInMatrix;