import checkNewShot from '../helpers/check-new-shot';
import checkShotTarget from '../helpers/check-shot-target';
import addPrevShot from './add-prev-shot';
import addLastShot from './add-last-shot';

const shotAtVerticalShip = (matrix, {decks, borders}) => {
console.log('vert')
   const {rowNum: rowFirst, colNum} = decks[0];
   const {rowNum: rowLast} = decks[decks.length - 1];

   let shot = {rowNum: rowLast + 1, colNum};

   if(decks.length >= 1 
   && borders.length === 3 
   && borders[2].colNum === colNum) {
      console.log(colNum, borders[0].colNum)
      shot = {colNum, rowNum: rowFirst - 1};
   
      if(checkNewShot(shot)
      && checkShotTarget(matrix, shot)) {

         return addPrevShot(matrix, decks, borders, shot);
      }
   }

   if(checkNewShot(shot)
   && checkShotTarget(matrix, shot)) {

      return addLastShot(matrix, decks, borders, shot);

   }else {
      shot = {rowNum: rowFirst - 1, colNum};
      if(checkNewShot(shot)
      && checkShotTarget(matrix, shot)) {

         return addPrevShot(matrix, decks, borders, shot);
      }
      return false;
   }
}

export default shotAtVerticalShip;
