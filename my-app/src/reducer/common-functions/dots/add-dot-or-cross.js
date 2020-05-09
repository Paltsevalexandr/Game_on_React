const addDotOrCross = ({matrix, labels}, newLabel) => {
  const rowNumber = (newLabel.top - 132) / 33;
  const colNumber = (newLabel.left - 594) / 33;
  console.log(typeof matrix[rowNumber][colNumber])
  if(typeof matrix[rowNumber][colNumber] === 'number') {

    matrix[rowNumber][colNumber] = 'dot';
    newLabel.type = 'dot';

  }else if(typeof matrix[rowNumber][colNumber] === 'object'){
    matrix[rowNumber][colNumber] = 'cross';
    newLabel.type = 'cross';

  }
  
  return {matrix, labels: [...labels, newLabel]};
}

export default addDotOrCross;
