const chooseType = type => {
  
  if(type === 'deck') {
    return 'cross';
  }
  
  return 'dot';
}

export default chooseType;
