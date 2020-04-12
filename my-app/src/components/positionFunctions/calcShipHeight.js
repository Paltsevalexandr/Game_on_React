export function calcShipHeight(shipName, isVertical) {
  if(isVertical === false) {
    return 33;
  }else if(isVertical === true) {

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