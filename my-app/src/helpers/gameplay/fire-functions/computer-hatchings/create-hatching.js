const createHatching = ({rowNum, colNum}) => {
   const top = rowNum * 33 + 132;
   const left = colNum * 33 + 132;
   
   return {
      top,
      left,
      type: 'hatching'
   }
}

export default createHatching;
