import randomShot from './random-shot/random-shot';
import heapShot from './heap-shot/heap-shot';

const chooseFireMode = (matrix, defeatedShips) => {
   const {currentTarget: {decks}} = defeatedShips;
   
   if(decks.length === 0) {
      return randomShot(matrix, defeatedShips);
      
   }
   return heapShot(matrix, defeatedShips);
}

export default chooseFireMode;
