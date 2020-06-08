import continueShooting from './continue-shooting/continue-shooting';
import finishShipAndRandomShot from './finish-ship-and-random-shot';

const heapShot = (matrix, defeatedShips, labels) => {
   
   let shotResult = continueShooting(matrix, defeatedShips);

   if(!shotResult) {
      return finishShipAndRandomShot(matrix, labels, defeatedShips);
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
