import deleteHatchingFromMatrix from './delete-hatching-from-matrix';

const deleteHatching = (state, hatchingTop, hatchingLeft) => {

   const {matrix, labels} = state;
   
   return {
      ...state,
      labels: labels.filter(({top, left}) => top !== hatchingTop || left !== hatchingLeft),
      matrix: deleteHatchingFromMatrix(matrix, hatchingTop, hatchingLeft)
   };
}

export default deleteHatching;
