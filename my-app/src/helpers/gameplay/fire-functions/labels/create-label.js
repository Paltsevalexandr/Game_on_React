import chooseType from './choose-type';
import calcCoordinates from './calc-coordinates';

const createLabel = (
  {type, rowNum, colNum},
  fieldIndents) => {
    
  const {top, left} = calcCoordinates({rowNum, colNum}, fieldIndents);

  return {
    type: chooseType(type),
    top,
    left
  };
}

export default createLabel;
