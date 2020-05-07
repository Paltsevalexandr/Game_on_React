const isRandomShipBeyondField = ({top, left, width, height, isVertical}) => {

  if(isVertical) {
    if(top >= 595) {
      if(top >= 595 + 297 - height) return false;

    }else if(top <= 595) {
      if(top >= 132 + 297 - height) return false;
    }

  }else {
    if(left >= 595) {
      if(left >= 595 + 297 - width) return false;
  
    }else if(left <= 595) {
      if(left >= 132 + 297 - width) return false;
    }
  }
  return true;
}

export default isRandomShipBeyondField;
