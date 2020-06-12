const hatchingsForHorizontalShip = decks => {
   let hatchings = [];

   decks.forEach((deck, index) => {
      let {rowNum, colNum} = deck;
      if(index === 0) {
         hatchings.push(
            {rowNum: rowNum - 1, colNum: colNum - 1, type: 'hatching'}, 
            {rowNum: rowNum, colNum: colNum - 1, type: 'hatching'}, 
            {rowNum: rowNum + 1, colNum: colNum - 1, type: 'hatching'}
         );

      }else if(index === decks.length - 1){
         hatchings.push(
            {rowNum: rowNum - 1, colNum: colNum + 1, type: 'hatching'}, 
            {rowNum: rowNum, colNum: colNum + 1, type: 'hatching'}, 
            {rowNum: rowNum + 1, colNum: colNum + 1, type: 'hatching'}
         )
      }
      hatchings.push(
         {rowNum: rowNum - 1, colNum, type: 'hatching'},
         {rowNum: rowNum + 1, colNum, type: 'hatching'})
   });

   return hatchings;
}

export default hatchingsForHorizontalShip;
