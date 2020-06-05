import calcShotCoordinates from './calc-shot-coordinates';
import createLabel from '../labels/create-label';
import {addShotToMatrix, findTarget} from '../helpers';
import createShot from './create-shot';

const gamerFire = ({matrix, labels, ...args}, action, fieldIndents) => {

  const shotCoordinates = calcShotCoordinates(action);
  const shot = createShot(shotCoordinates, fieldIndents);
  
  const target = {
    type: findTarget(matrix, shot),
    ...shot
  };
  
  if(target.type === null || target.type === 'deck') {
    return {
      ...args, 
      labels: [
        ...labels,
        createLabel(target, fieldIndents)
      ],
      matrix: addShotToMatrix(matrix, target)
    };
  }

  return {matrix, labels, ...args}
}

export default gamerFire;
