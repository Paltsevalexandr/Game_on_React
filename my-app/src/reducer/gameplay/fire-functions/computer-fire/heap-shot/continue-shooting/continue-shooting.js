import shotAtHorizontalShip from './shot-at-horizontal-ship';
import shotAtVerticalShip from './shot-at-vertical-ship';
import determineShipIsVertical from './determine-ship-isVertical';

const continueShooting = (matrix, currentTarget) => {

   const shipIsVertical = determineShipIsVertical(currentTarget);
console.log(shipIsVertical)
   if(shipIsVertical) {
      
      return shotAtVerticalShip(matrix, currentTarget);
   }
   
   return shotAtHorizontalShip(matrix, currentTarget);

}

export default continueShooting;
