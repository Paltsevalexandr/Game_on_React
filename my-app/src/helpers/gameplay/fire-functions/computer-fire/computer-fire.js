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
  
  const result = chooseFireMode(matrix, defeatedShips, labels);

  const {target, defeatedShips: updatedDefeatedShips} = result;

  if(result.updatedMatrix) {
    const {updatedMatrix, updatedLabels} = result;
    
    return {
      ...args,
      defeatedShips: updatedDefeatedShips,
      labels: [
        ...updatedLabels,
        createLabel(target, fieldIndents)
      ],
      matrix: addShotToMatrix(updatedMatrix, target)
    };
  }

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
