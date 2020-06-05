import {checkNewShot, checkShotTarget, addPrevShot, addLastShot, maxShipLength} from '../helpers';
import addCurrentTarget from '../../add-current-target';
import shotAtVerticalShip from './shot-at-vertical-ship';

const shotAtHorizontalShip = (matrix, {currentTarget, destroyedShips}, isVertical) => { 
   let {decks} = currentTarget;
   let updatedCurrentTarget;

   if(maxShipLength(destroyedShips) > decks.length) {
      const {colNum: colFirst, rowNum} = decks[0];
      const {colNum: colLast} = decks[decks.length - 1];

      let shot = {rowNum, colNum: colFirst - 1};
      
      if(checkNewShot(shot)
      && checkShotTarget(matrix, shot)) {

         updatedCurrentTarget = addPrevShot(matrix, currentTarget, shot);

      }else {
         shot = {rowNum, colNum: colLast + 1};

         if(checkNewShot(shot) 
         && checkShotTarget(matrix, shot)) {
         
            updatedCurrentTarget = addLastShot(matrix, currentTarget, shot);
         }
      }
      if(!updatedCurrentTarget) {
         return shotAtVerticalShip(matrix, {currentTarget, destroyedShips}, isVertical);
      }
   }
   return addCurrentTarget(updatedCurrentTarget, destroyedShips, isVertical);
}

export default shotAtHorizontalShip;
      