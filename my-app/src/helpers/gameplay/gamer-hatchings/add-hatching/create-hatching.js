import addHatching from './add-hatching';

const createHatching = (state, top, left) => {

  const hatching = {
    left,
    top,
    type: 'hatching'
  };

  
  return addHatching(state, hatching);
}

export default createHatching;
