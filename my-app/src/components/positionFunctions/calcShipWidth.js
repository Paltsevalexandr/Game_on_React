export function calcShipWidth(shipName, isVertical = false) {
  if(isVertical === true) {
    return 33;
  }else if(isVertical === false || isVertical === undefined) {
    if(shipName.slice(0, -1) === 'fourdeck'){
      return 132;
    }else if(shipName.slice(0, -1) === 'threedeck'){
      return 99;
    }else if(shipName.slice(0, -1) === 'twodeck'){
      return 66;
    }else if(shipName.slice(0, -1) === 'onedeck'){
      return 33;
    }
  }
}