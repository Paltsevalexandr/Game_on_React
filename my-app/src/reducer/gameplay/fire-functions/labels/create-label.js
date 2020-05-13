import chooseType from './choose-type';
import calcCoordinates from './calc-coordinates';

const createLabel = (
  {type}, 
  coordinates, 
  fieldIndents) => {
    
  const {top, left} = calcCoordinates(coordinates, fieldIndents);

  return {
    type: chooseType(type),
    top,
    left
  };
}

export default createLabel;
