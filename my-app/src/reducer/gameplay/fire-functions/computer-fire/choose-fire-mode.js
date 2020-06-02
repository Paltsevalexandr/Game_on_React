import randomShot from './random-shot/random-shot';
import heapShot from './heap-shot/heap-shot';

const chooseFireMode = (matrix, currentTarget) => {
   
   if(currentTarget.decks.length === 0) {
      return randomShot(matrix);
      
   }
   return heapShot(matrix, currentTarget);
}

export default chooseFireMode;
