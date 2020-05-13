const chooseNextGamer = ({gamer, target})=> {

  /*if(target.type === 'deck') {
    return gamer;
  }*/
  gamer++;

  if(gamer > 2) {
    gamer = 1;
  }
  console.log(gamer)
  return gamer;
}

export default chooseNextGamer;
