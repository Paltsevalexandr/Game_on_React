const isRotateShipBeyondField = ({isVertical, width, height, top, left}) => {
  
  if(isVertical) {

    if(top + height > 132 + 330) {
      return false;
    }

  }else if(!isVertical){

    if(left + width > 132 + 330) {
      return false;
    }   
  }
  return true
}

export default isRotateShipBeyondField;
