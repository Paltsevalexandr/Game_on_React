import continueShooting from './continue-shooting/continue-shooting';
import randomShot from '../random-shot/random-shot';

const heapShot = (matrix, defeatedShips) => {
   
   let updatedDefeatedShips = continueShooting(matrix, defeatedShips);
   
   if(!updatedDefeatedShips) {
      updatedDefeatedShips = randomShot(matrix, defeatedShips);
   }

   return updatedDefeatedShips;
}

export default heapShot;
