import deleteHatching from './delete-hatching/delete-hatching';
import createHatching from './add-hatching/create-hatching';
import calcHatchingPosition from './calc-hatching-position';

const createOrDeleteHatching = (state, {top, left}) => {

   const {matrix} = state;

   const hatchingTop = calcHatchingPosition(top);
   const hatchingLeft = calcHatchingPosition(left);

   const rowNum = (hatchingTop - 132) / 33;
   const colNum = (hatchingLeft - 594) / 33;
   
   if(!hatchingTop || !hatchingLeft) {
      return state;

   }else if(matrix[rowNum][colNum].type === 'hatching') {
      return deleteHatching(state, hatchingTop, hatchingLeft);
   }
   
   return createHatching(state, hatchingTop, hatchingLeft);
}

export default createOrDeleteHatching;
