import continueShooting from './continue-shooting/continue-shooting';
import randomShot from '../random-shot/random-shot';
import {addSunkenShip} from './helpers';

const heapShot = (matrix, defeatedShips) => {
   
   let shotResult = continueShooting(matrix, defeatedShips);

   if(!shotResult) {
      let destroyedShips = addSunkenShip(defeatedShips);
      shotResult = randomShot(matrix, defeatedShips);
      shotResult.defeatedShips.destroyedShips = destroyedShips;
      return shotResult;
   }

   const {target, currentTarget} = shotResult;
   const {destroyedShips} = defeatedShips;

   return {
      target,
      defeatedShips: {
         currentTarget,
         destroyedShips
      }
   };
}

export default heapShot;
