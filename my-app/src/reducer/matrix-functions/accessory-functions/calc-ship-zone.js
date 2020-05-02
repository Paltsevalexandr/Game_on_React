const shipZoneSize = (coordinate, decksNum) => {
  let result = coordinate + decksNum + 1;
  if(result > 9) {
    result = 9;
  }
  return result;
}

export default shipZoneSize;