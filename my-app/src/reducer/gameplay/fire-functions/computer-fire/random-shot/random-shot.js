import createShot from './create-shot';
import findTarget from '../../find-target';

const randomShot = matrix => {
  let shot = createShot();
  let target = findTarget(matrix, shot);
  let decks = [];
  let borders = [];

  if(target.type !== null 
  && target.type !== 'deck') {
    return randomShot(matrix);
  }
  
  if(target.type === 'deck') {
    decks.push({
      type: 'deck',  
      colNum: shot.colNum, 
      rowNum: shot.rowNum
    });
  }
   
  return {target, decks, borders, shot};
}

export default randomShot;
