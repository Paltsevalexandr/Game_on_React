import shotAtHorizontalShip from './shot-at-horizontal-ship';
import shotAtVerticalShip from './shot-at-vertical-ship';
import {determineShipIsVertical} from '../helpers';

const continueShooting = (matrix, defeatedShips) => {
   
   let {currentTarget: {isVertical}} = defeatedShips;
   
   if(isVertical === undefined) {
      isVertical = determineShipIsVertical(matrix, defeatedShips);
   }
   
   if(isVertical) {
      
      return shotAtVerticalShip(matrix, defeatedShips, isVertical);
   }

   return shotAtHorizontalShip(matrix, defeatedShips, isVertical);
}

export default continueShooting;
