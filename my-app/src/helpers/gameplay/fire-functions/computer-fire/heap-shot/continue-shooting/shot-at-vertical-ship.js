import {checkNewShot, checkShotTarget, addPrevShot, addLastShot, maxShipLength} from '../helpers';
import addCurrentTarget from '../../add-current-target/add-current-target';

const shotAtVerticalShip = (matrix, {currentTarget, destroyedShips}, isVertical) => {
   let {decks} = currentTarget;
   let updatedCurrentTarget;
   
   if(maxShipLength(destroyedShips) > decks.length) {
      const {rowNum: rowFirst, colNum} = decks[0];
      const {rowNum: rowLast} = decks[decks.length - 1];

      let shot = {rowNum: rowFirst - 1, colNum};

      if(checkNewShot(shot)
      && checkShotTarget(matrix, shot)) {

         updatedCurrentTarget = addPrevShot(matrix, currentTarget, shot);

      }else {
         shot = {rowNum: rowLast + 1, colNum};
         if(checkNewShot(shot)
         && checkShotTarget(matrix, shot)) {

            updatedCurrentTarget = addLastShot(matrix, currentTarget, shot);
         }
      }
   }
   return addCurrentTarget(updatedCurrentTarget, destroyedShips, isVertical);
}

export default shotAtVerticalShip;
