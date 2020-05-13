import calcShotCoordinates from './calc-shot-coordinates';
import createLabel from '../labels/create-label';
import addShotToMatrix from '../add-to-matrix/add-shot-to-matrix';
import findTarget from '../find-target';
import createShot from './create-shot';

const gamerFire = ({matrix, labels, ...args}, action, fieldIndents) => {

  const shotCoordinates = calcShotCoordinates(action);
  const shot = createShot(shotCoordinates, fieldIndents);
  const target = findTarget(matrix, shot);

  if(target.isHurt) {
    return {matrix, labels, ...args}
  }

  return {
    ...args, 
    labels: [
      ...labels,
      createLabel(target, shot, fieldIndents)
    ],
    matrix: addShotToMatrix(matrix, target, shot)
  };
}

export default gamerFire;
