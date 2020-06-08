const calcHatchingsCoordinates = ({decks, isVertical}) => {
   let hatchings = [];
   console.log('vert: ', isVertical)
   if(decks.length === 1) {
      const {rowNum, colNum} = decks[0];

      hatchings.push(
         {rowNum: rowNum - 1, colNum: colNum - 1, type: 'hatching'}, 
         {rowNum: rowNum - 1, colNum, type: 'hatching'}, 
         {rowNum: rowNum - 1, colNum: colNum + 1, type: 'hatching'},
         {rowNum, colNum: colNum - 1, type: 'hatching'},
         {rowNum, colNum: colNum + 1, type: 'hatching'},
         {rowNum: rowNum + 1, colNum: colNum - 1, type: 'hatching'}, 
         {rowNum: rowNum + 1, colNum, type: 'hatching'}, 
         {rowNum: rowNum + 1, colNum: colNum + 1, type: 'hatching'}
      );

   }else if(isVertical) {
      if(decks.length > 1) {
         decks.forEach((deck, index) => {
            let {rowNum, colNum} = deck;
            if(index === 0) {
               hatchings.push(
                  {rowNum: rowNum - 1, colNum: colNum - 1, type: 'hatching'}, 
                  {rowNum: rowNum - 1, colNum, type: 'hatching'}, 
                  {rowNum: rowNum - 1, colNum: colNum + 1, type: 'hatching'}
               );

            }else if(index === decks.length - 1){
               hatchings.push(
                  {rowNum: rowNum + 1, colNum: colNum - 1, type: 'hatching'}, 
                  {rowNum: rowNum + 1, colNum, type: 'hatching'}, 
                  {rowNum: rowNum + 1, colNum: colNum + 1, type: 'hatching'}
               )
            }
            hatchings.push(
               {rowNum, colNum: colNum - 1, type: 'hatching'},
               {rowNum, colNum: colNum + 1, type: 'hatching'})
         });
      }
   }

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

export default calcHatchingsCoordinates;
