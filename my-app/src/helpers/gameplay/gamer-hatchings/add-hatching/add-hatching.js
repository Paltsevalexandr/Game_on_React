import addHatchingToMatrix from './add-hatching-to-matrix';

const addHatching = (state, hatching) => {

  const {matrix, labels} = state;
  
  const rowNum = (hatching.top - 132) / 33;
  const colNum = (hatching.left - 594) / 33;

  switch(matrix[rowNum][colNum].type) {

    case 'deck':
    case null:
      return {
        ...state,
        matrix: addHatchingToMatrix(matrix, rowNum, colNum),
        labels: [...labels, hatching]
      }
    
    default:
      return state;
  }
}

export default addHatching;
