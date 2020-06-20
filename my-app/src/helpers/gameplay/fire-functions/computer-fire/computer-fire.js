import chooseFireMode from './choose-fire-mode';
import createLabel from '../labels/create-label';
import {addShotToMatrix} from '../helpers';

const computerFire = (
  { matrix, 
    labels, 
    defeatedShips,
    ...rest },
  fieldIndents) => {

  if(defeatedShips.destroyedShips.length === 1) {
    return { 
      matrix, 
      labels, 
      defeatedShips,
      ...rest 
    }
  }

  const result = chooseFireMode(matrix, defeatedShips, labels);

  const {target, defeatedShips: updatedDefeatedShips} = result;

  if(result.updatedMatrix) {
    const {updatedMatrix, updatedLabels} = result;
    matrix = updatedMatrix;
    labels = updatedLabels;
  }

  return {
    ...rest,
    defeatedShips: updatedDefeatedShips,
    labels: [
      ...labels,
      createLabel(target, fieldIndents)
    ],
    matrix: addShotToMatrix(matrix, target)
  };

}

export default computerFire;
