import randomShot from './random-shot/random-shot';
import continueShooting from './continue-shooting/continue-shooting';

const chooseFireMode = (matrix, defeatedShips, labels) => {
   const {currentTarget: {decks}} = defeatedShips;
   
   if(decks.length === 0) {
      return randomShot(matrix, defeatedShips);
      
   }
   return continueShooting(matrix, defeatedShips, labels);
}

export default chooseFireMode;
