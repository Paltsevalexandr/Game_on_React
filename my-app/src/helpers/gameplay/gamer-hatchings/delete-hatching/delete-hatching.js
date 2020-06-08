import deleteHatchingFromMatrix from './delete-hatching-from-matrix';

const deleteHatching = (state, hatchingTop, hatchingLeft) => {

   const {matrix, labels} = state;
   console.log(labels)
   console.log(hatchingTop, hatchingLeft)
   return {
      ...state,
      labels: labels.filter(({top, left}) => top !== hatchingTop || left !== hatchingLeft),
      matrix: deleteHatchingFromMatrix(matrix, hatchingTop, hatchingLeft)
   };
}

export default deleteHatching;
