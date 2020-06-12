import {positionInMatrix, shipZoneSize} from '../../matrix-functions';

const calcShipZoneBorders = (shipLeft, shipTop, {decksNum, isVertical}) => {
  
  const shipZoneTop = positionInMatrix(shipTop) - 1;
  const shipZoneLeft = positionInMatrix(shipLeft) - 1;

  let shipZoneRight = shipZoneSize(shipZoneLeft, decksNum);
  let shipZoneBottom = shipZoneTop + 2;
  
  if(isVertical) {
    shipZoneBottom = shipZoneSize(shipZoneTop, decksNum);
    shipZoneRight = shipZoneLeft + 2;
  }

  return {
    shipZoneTop,
    shipZoneRight, 
    shipZoneBottom, 
    shipZoneLeft 
  };
}

export default calcShipZoneBorders;
