const chooseType = type => {
  
  switch(type) {
    case 'deck':
      return 'cross';
    
    default:
      return 'dot';
  }
}

export default chooseType;
