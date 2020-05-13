import createLabel from '../create-label';
import checkHatchingPosition from './check-hatching-position';

const addHatching = (state, action) => {

  const hatching = createLabel(action);

  if(hatching) {
    hatching.type = 'hatching';
    return checkHatchingPosition(state, hatching);
  }

  return state;
}

export default addHatching;
