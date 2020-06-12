import createShot from './create-shot';
import {findTarget} from '../../helpers';

const randomShot = (matrix, {currentTarget, destroyedShips}) => {
  let decks = [];
  let borders = [];
  
  let shot = createShot();
  let target = {
    type: findTarget(matrix, shot),
    ...shot
  };
  
  if(target.type !== null 
  && target.type !== 'deck') {
    return randomShot(matrix, {currentTarget, destroyedShips});
  }
  
  if(target.type === 'deck') {
    decks.push({
      type: 'deck',  
      rowNum: shot.rowNum,
      colNum: shot.colNum
    });
  }
  
  return {
    target, 
    defeatedShips: {
      currentTarget: {
        decks, 
        borders,
        isVertical: undefined
      },
      destroyedShips
    }
  };
}

export default randomShot;
