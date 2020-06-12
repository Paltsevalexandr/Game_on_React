const isRandomShipBeyondField = ({top, left, width, height, isVertical}) => {

  if(isVertical) {
    if(top >= 594) {
      if(top >= 594 + 297 - height) return false;

    }else if(top <= 594) {
      if(top >= 132 + 297 - height) return false;
    }

  }else {
    if(left >= 594) {
      if(left >= 594 + 297 - width) return false;
  
    }else if(left <= 594) {
      if(left >= 132 + 297 - width) return false;
    }
  }
  return true;
}

export default isRandomShipBeyondField;
