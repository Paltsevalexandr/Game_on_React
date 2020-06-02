import chooseFireMode from './choose-fire-mode';
import createLabel from '../labels/create-label';
import addShotToMatrix from '../add-to-matrix/add-shot-to-matrix';

const computerFire = (
  {
    matrix, 
    labels, 
    defeatedShips: {currentTarget, destroyedShips},
    ...args
  },
  fieldIndents) => {
  
  let {shot, target, decks, borders} = chooseFireMode(matrix, currentTarget);
  
  return {
    ...args,
    defeatedShips: {
      currentTarget: {...currentTarget, decks, borders}, 
      destroyedShips
    },
    labels: [
      ...labels,
      createLabel(target, shot, fieldIndents)
    ],
    matrix: addShotToMatrix(matrix, target, shot)
  };
}

export default computerFire;
