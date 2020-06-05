import addDotOrCross from './dots-and-crosses/add-dot-or-cross';
import createLabel from './create-label';

const addLabel = (state, action) => {

  const newLabel = createLabel(action);

  if(newLabel) {
    return addDotOrCross(state, newLabel);
  }

  return state;
}

export default addLabel;
