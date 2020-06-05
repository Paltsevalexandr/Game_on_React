const createShot = ({left, top}, {fieldTop, fieldLeft}) => {
  return {
    rowNum: (top - fieldTop) / 33,
    colNum: (left - fieldLeft) / 33
  }
}

export default createShot;
