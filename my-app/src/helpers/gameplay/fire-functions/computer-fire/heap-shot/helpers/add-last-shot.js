import {findTarget} from '../../../helpers';

const addLastShot = (matrix, {decks, borders}, shot) => {
   
   let target = {
      type: findTarget(matrix, shot),
      ...shot
   };
   
   if(target.type === null) {
      borders.push(target);

   }else {
      decks.push(target);
   }
   
   return {target, currentTarget: {decks, borders}};
}

export default addLastShot;
