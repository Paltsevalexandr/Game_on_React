const verticalDeckBetweenLabels = (matrix, decks, borders) => {

   const {rowNum: deckRow, colNum: deckCol} = decks[0];

   if(borders.filter(({rowNum}) => rowNum === deckRow).length === 2) {
      return true;
      
   }else if(deckCol > 0 && deckCol < 9) {

      if((  matrix[deckRow][deckCol - 1].marked === true 
         && matrix[deckRow][deckCol + 1].marked === true )
   
      || ( borders.find(({rowNum}) => rowNum === deckRow)
         && (  matrix[deckRow][deckCol - 1].marked === true
            || matrix[deckRow][deckCol + 1].marked === true) )) {

         return true;

      }
   }
   
   return false;
}

export default verticalDeckBetweenLabels;
