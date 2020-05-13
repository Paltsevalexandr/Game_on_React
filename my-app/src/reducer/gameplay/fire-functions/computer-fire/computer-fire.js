import createShot from './create-shot';
import findTarget from '../find-target';
import createLabel from '../labels/create-label';
import addShotToMatrix from '../add-to-matrix/add-shot-to-matrix';

const computerFire = ({matrix, labels, ...args}, fieldIndents) => {

  const shot = createShot();
  const target = findTarget(matrix, shot);

  if(target.isHurt) {
    return computerFire({matrix, labels, ...args}, fieldIndents)
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

export default computerFire;
