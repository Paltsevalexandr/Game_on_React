import {findTarget} from '../../../helpers';

const addLastShot = (matrix, {decks}, shot) => {
   
   let target = {
      type: findTarget(matrix, shot),
      ...shot
   };
   
   if(target.type) {
      decks.push(target);

   }
   
   return {target, currentTarget: {decks}};
}

export default addLastShot;
