import {checkNewShot, checkShotTarget, addPrevShot, addLastShot, maxShipLength} from '../helpers';

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
      if(updatedCurrentTarget) {
         updatedCurrentTarget.currentTarget.isVertical = isVertical;
      }
   }
   return updatedCurrentTarget;
}

export default shotAtVerticalShip;
