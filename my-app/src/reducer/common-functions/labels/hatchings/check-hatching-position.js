import addLabelToMatrix from '../add-label-to-matrix';

const checkHatchingPosition = (state, hatching) => {

  const {matrix, labels} = state;
  
  const rowNum = (hatching.top - 132) / 33;
  const colNum = (hatching.left - 594) / 33;

  switch(typeof matrix[rowNum][colNum]) {

    case 'number':
    case 'object':
      return {
        ...state,
        matrix: addLabelToMatrix(matrix, hatching),
        labels: [...labels, hatching]
      }

    default:
      return state;
  }
}

export default checkHatchingPosition;
