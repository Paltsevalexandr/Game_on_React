const addDotOrCross = (state, newLabel) => {
  const {matrix, labels} = state;

  const rowNum = (newLabel.top - 132) / 33;
  const colNum = (newLabel.left - 594) / 33;

  switch(typeof matrix[rowNum][colNum]) {

    case 'number':
      newLabel.type = 'dot';
      break;

    case 'object':
      newLabel.type = 'cross';
      break;

    default:
      return state;
  }

  return [...labels, newLabel];  
}

export default addDotOrCross;
