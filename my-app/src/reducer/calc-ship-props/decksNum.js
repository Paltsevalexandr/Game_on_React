const calcShipDecksNumber = ship => {
  if(ship.slice(0, -1) === 'fourdeck') {
    return 4;
  }else if(ship.slice(0, -1) === 'threedeck') {
    return 3;
  }else if(ship.slice(0, -1) === 'twodeck') {
    return 2;
  }else if(ship.slice(0, -1) === 'onedeck') {
    return 1;
  }
}

export default calcShipDecksNumber;