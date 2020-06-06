const horizontalDeckBetweenLabels = (matrix, decks, borders) => {

   const {rowNum: deckRow, colNum: deckCol} = decks[0];

   if( borders.filter(({colNum}) => colNum === deckCol).length === 2) {
      return true;

   }else if(deckRow > 0 && deckRow < 9) {
      console.log(deckRow)

      if((  matrix[deckRow - 1][deckCol].marked === true 
         && matrix[deckRow + 1][deckCol].marked === true)
   
      || (  matrix[deckRow - 1][deckCol].marked === true 
         && borders.find(({colNum, rowNum}) => colNum === deckCol && rowNum === deckRow + 1))
         
      || (  borders.find(({colNum, rowNum}) => colNum === deckCol && rowNum === deckRow - 1) 
         && matrix[deckRow + 1][deckCol].marked === true)) {
   
            return true
      }
   }

   return false;
}

export default horizontalDeckBetweenLabels;
