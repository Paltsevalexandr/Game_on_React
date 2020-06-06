import setHatching from './set-hatching';
import calcLabelPosition from './calc-label-position';

const createHatching = (state, {left, top}) => {

  const hatching = {
    left: calcLabelPosition(left),
    top: calcLabelPosition(top),
    type: 'hatching'
  };

  
  if(hatching.left && hatching.top) {
    return setHatching(state, hatching);
  }
  
  return state;
}

export default createHatching;
