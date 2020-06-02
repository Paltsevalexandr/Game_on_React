import createSecondShot from "./second-shot-at-current-target/create-second-shot"
import continueShooting from './continue-shooting/continue-shooting';
import randomShot from '../random-shot/random-shot';

const heapShot = (matrix, currentTarget) => {
   let shotObj;

   if(currentTarget.decks.length === 1 
   && currentTarget.borders.length === 0) {
      shotObj = createSecondShot(matrix, currentTarget);

   }else if(currentTarget.decks.length >= 1) {
      shotObj = continueShooting(matrix, currentTarget);
   }

   if(!shotObj) {
      console.log('random heat', currentTarget)
      shotObj = randomShot(matrix);
   }

   return shotObj;
}

export default heapShot;
