import checkShotTarget from '../helpers/check-shot-target';
import checkNewShot from '../helpers/check-new-shot';
import findTarget from '../../../find-target';

const createSecondShot = (matrix, {decks, borders}) => {
   
   let {rowNum, colNum} = decks[0];
   let shot = {rowNum, colNum: colNum + 1};

   if(!checkNewShot(shot) 
   || !checkShotTarget(matrix, shot)) {
      shot = {rowNum, colNum: colNum - 1};

      if( !checkNewShot(shot)
      || !checkShotTarget(matrix, shot)) {
         shot = {rowNum: rowNum - 1, colNum};

         if( !checkNewShot(shot)
         || !checkShotTarget(matrix, shot)) {
            shot = {rowNum: rowNum + 1, colNum};

            if( !checkNewShot(shot)
            || !checkShotTarget(matrix, shot)) {
               return false;
            }
         }
      }
   }

   let target = findTarget(matrix, shot);
   
   if(target.type === null) {
      borders.push({
         type: target.type, 
         rowNum: shot.rowNum, 
         colNum: shot.colNum
      });
   }else {
      decks.push({
         type: target.type, 
         rowNum: shot.rowNum, 
         colNum: shot.colNum
      });
   }
   
   return {shot, decks, borders, target};
}

export default createSecondShot;
