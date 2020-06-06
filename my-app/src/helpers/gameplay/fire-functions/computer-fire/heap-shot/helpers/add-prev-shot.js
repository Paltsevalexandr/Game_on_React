import {findTarget} from '../../../helpers';

const addPrevShot = (matrix, {decks, borders}, shot) => {
         
   let target = {
      type: findTarget(matrix, shot),
      ...shot
   };

   if(target.type === null) {
      borders.unshift(target);
      
   }else {
      decks.unshift(target);
   }
   
   return {target, currentTarget: {decks, borders}};
}

export default addPrevShot;
