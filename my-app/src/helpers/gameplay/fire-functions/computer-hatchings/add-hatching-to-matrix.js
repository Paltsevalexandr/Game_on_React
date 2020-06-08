const addHatchingToMatrix = (matrix, hatching) => {

   const {colNum, rowNum} = hatching;

   return matrix.map((row, index) => {

      if(index === rowNum) {
         return row.map((item, idx) => {

            if(idx === colNum) {
               item = {...hatching, marked: true};
            }
            return item;
         });
         
      }
      return row;
   });
}

export default addHatchingToMatrix;
