const shipIsHorizontal = (matrix, {decks, borders}) => {
   const {rowNum: deckRow, colNum: deckCol} = decks[0];

   if((deckRow === 9
    && borders.length > 0 
    && ( borders.find(rowNum => rowNum === 8) 
      || matrix[8][deckCol].type === 'shot'))

   || (deckRow === 0
    && borders.length > 0
    && ( borders.find(({colNum}) => colNum === 1)
      || matrix[1][deckCol].type === 'shot'))

   || (decks.length > 1 && deckRow === decks[1].rowNum)

   || ( decks.length === 1 
    && borders.length > 0
    && ( borders.filter(({colNum}) => colNum === deckCol).length === 2
      || (  matrix[deckRow - 1][deckCol].type === 'shot' 
         && matrix[deckRow + 1][deckCol].type === 'shot')

      || (  matrix[deckRow - 1][deckCol].type === 'shot' 
         && borders.find(({colNum, rowNum}) => colNum === deckCol && rowNum === deckRow + 1))
         
      || (  borders.find(({colNum, rowNum}) => colNum === deckCol && rowNum === deckRow - 1) 
         && matrix[deckRow + 1][deckCol].type === 'shot')))) {
   
      return true;
   
   }
   return false;
}

export default shipIsHorizontal;
