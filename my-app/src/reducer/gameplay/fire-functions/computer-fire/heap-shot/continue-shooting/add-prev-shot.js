import findTarget from '../../../find-target';

const addPrevShot = (matrix, decks, borders, shot) => {
         
   let target = findTarget(matrix, shot);

   if(target.type === null) {
      borders.unshift({
         type: target.type,
         rowNum: shot.rowNum,
         colNum: shot.colNum 
      });
   }else {
      decks.unshift({
         type: target.type,
         rowNum: shot.rowNum,
         colNum: shot.colNum 
      });
   }

   return {shot, decks, borders, target};
}

export default addPrevShot;
