import chooseFireMode from './choose-fire-mode';
import createLabel from '../labels/create-label';
import {addShotToMatrix} from '../helpers';

const computerFire = (
  {
    matrix, 
    labels, 
    defeatedShips,
    ...args
  },
  fieldIndents) => {
  
  let {target, defeatedShips: updatedDefeatedShips} = chooseFireMode(matrix, defeatedShips);
  
  return {
    ...args,
    defeatedShips: updatedDefeatedShips,
    labels: [
      ...labels,
      createLabel(target, fieldIndents)
    ],
    matrix: addShotToMatrix(matrix, target)
  };
}

export default computerFire;
