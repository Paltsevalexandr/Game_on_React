import addDotOrCross from './add-dot-or-cross';
import createLabel from './create-label';

const addLabel = (state, action) => {

  const newLabel = createLabel(action);

  if(newLabel) {
    return addDotOrCross(state, newLabel);
  }

  return {
    labels: state.labels, 
    matrix: state.matrix
  };
}

export default addLabel;
