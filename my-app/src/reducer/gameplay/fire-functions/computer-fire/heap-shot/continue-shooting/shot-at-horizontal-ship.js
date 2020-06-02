import checkNewShot from '../helpers/check-new-shot';
import checkShotTarget from '../helpers/check-shot-target';
import addPrevShot from './add-prev-shot';
import addLastShot from './add-last-shot';

const shotAtHorizontalShip = (matrix, {decks, borders}) => { 
   let shot;
   const {rowNum, colNum: colFirst} = decks[0];
   const {colNum: colLast} = decks[decks.length - 1];
console.log('hor')

   if(decks.length >= 1 
   && borders.length === 1 
   && borders[0].colNum > colLast) {
      console.log(colLast, borders[0].colNum)
      shot = {rowNum, colNum: colFirst - 1};

      if(checkNewShot(shot)
      && checkShotTarget(matrix, shot)) {

         return addPrevShot(matrix, decks, borders, shot);
      }
   }
   
   shot = {rowNum, colNum: colLast + 1};
   
   if(checkNewShot(shot) 
   && checkShotTarget(matrix, shot)) {
      
      return addLastShot(matrix, decks, borders, shot);

   }else {
      shot = {rowNum, colNum: colFirst - 1};
      if(checkNewShot(shot)
      && checkShotTarget(matrix, shot)) {

         return addPrevShot(matrix, decks, borders, shot);
      }
      
      return false;
   }
}

export default shotAtHorizontalShip;
      