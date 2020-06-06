const shipIsHorizontal = ({decks}) => {
   

   if(decks.length > 1 
   && decks[0].rowNum === decks[1].rowNum) {
   
      return true;
   
   }
   return false;
}

export default shipIsHorizontal;

/*(deckRow === 9
    && borders.length > 0 
    && ( borders.find(rowNum => rowNum === 8) 
      || matrix[8][deckCol].marked === true))

   || (deckRow === 0
    && borders.length > 0
    && ( borders.find(({colNum}) => colNum === 1)
      || matrix[1][deckCol].marked === true))

   || (decks.length > 1 && deckRow === decks[1].rowNum)

   || ( decks.length === 1 
    && borders.length > 0
    && horizontalDeckBetweenLabels(matrix, decks, borders))*/