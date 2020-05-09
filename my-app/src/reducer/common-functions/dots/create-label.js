import calcLabelPosition from "./calc-label-position";

const createLabel = ({left, top}) => {
  const label = {
    left: calcLabelPosition(left),
    top: calcLabelPosition(top)
  }

  if(label.left === null
  || label.top === null) return null;
  
  return label;
}

export default createLabel;
