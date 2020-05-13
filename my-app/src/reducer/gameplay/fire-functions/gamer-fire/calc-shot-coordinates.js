const calcShotCoordinates = ({left, top}) => {
  
  return {
    left: left - left % 33,
    top: top - top % 33
  };
}

export default calcShotCoordinates;
