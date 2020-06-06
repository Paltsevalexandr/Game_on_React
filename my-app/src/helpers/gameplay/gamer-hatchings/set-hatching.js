import addLabelToMatrix from './add-label-to-matrix';

const setHatching = (state, hatching) => {

  const {matrix, labels} = state;
  
  const rowNum = (hatching.top - 132) / 33;
  const colNum = (hatching.left - 594) / 33;

  switch(matrix[rowNum][colNum].type) {

    case 'deck':
    case null:
      return {
        ...state,
        matrix: addLabelToMatrix(matrix, hatching),
        labels: [...labels, hatching]
      }
    
    default:
      return state;
  }
}

export default setHatching;
