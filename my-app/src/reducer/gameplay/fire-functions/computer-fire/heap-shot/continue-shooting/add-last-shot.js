import findTarget from '../../../find-target';

const addLastShot = (matrix, decks, borders, shot) => {
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

export default addLastShot;
