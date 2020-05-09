import createLabel from './create-label';

const makeHatching = (state, action) => {
  const {matrix, labels} = state;

  const hatching = createLabel(action);
  hatching.type = 'hatching';

  const rowNumber = (hatching.top - 132) / 33;
  const colNumber = (hatching.left - 594) / 33;
  
  if(typeof matrix[rowNumber][colNumber] === "number"
  || typeof matrix[rowNumber][colNumber] === "object") {
    return {
      ...state,
      matrix,
      labels: [...labels, hatching]
    }
  }
  return state;
}

export default makeHatching;
