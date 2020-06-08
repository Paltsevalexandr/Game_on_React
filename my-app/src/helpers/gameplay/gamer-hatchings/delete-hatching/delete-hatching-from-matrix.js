const deleteHatchingFromMatrix = (matrix, top, left) => {
   
   const rowNum = (top - 132) / 33;
   const colNum = (left - 594) / 33;

   return matrix.map((row, index) => {
      if(index === rowNum) {
        
        return row.map((item, idx) => {
  
          if(idx === colNum) {
  
            item = {type: item.prevType, marked: false, prevType: undefined};
            return item;
          }
          return item;
        });
      }
      return row;
   });
}

export default deleteHatchingFromMatrix;
