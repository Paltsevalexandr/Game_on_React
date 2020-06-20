import {findTarget} from '../../../helpers';

const addPrevShot = (matrix, {decks}, shot) => {
         
   let target = {
      type: findTarget(matrix, shot),
      ...shot
   };

   if(target.type) {
      decks.unshift(target);
   }
   
   return {target, currentTarget: {decks}};
}

export default addPrevShot;
