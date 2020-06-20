import heapShot from './heap-shot/heap-shot';
import finishShipAndRandomShot from './finish-ship-and-random-shot';

const continueShooting = (matrix, defeatedShips, labels) => {
   
   let shotResult = heapShot(matrix, defeatedShips);

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

export default continueShooting;
