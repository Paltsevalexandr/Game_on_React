const shipIsVertical = (matrix, {decks, borders}) => {
   const {rowNum: deckRow, colNum: deckCol} = decks[0];

   if(( deckCol === 9 
     && borders.length > 0 
     && ( borders.find(({colNum}) => colNum === 8)
       || matrix[deckRow][8].type === 'dot'))

   || ( deckCol === 0 
     && borders.length > 0
     && ( borders.find(({colNum}) => colNum === 1)
       || matrix[deckRow][1].type === 'shot'))

   || (decks.length > 1 && deckCol === decks[1].colNum)

   || ( decks.length === 1
     && borders.length > 0
     && ( borders.filter(({rowNum}) => rowNum === deckRow).length === 2
       || (matrix[deckRow][deckCol - 1].type === 'shot' && matrix[deckRow][deckCol + 1].type === 'shot')
       || (matrix[deckRow][deckCol - 1].type === 'hatching' && matrix[deckRow][deckCol + 1].type === 'hatching')))) {
   
      return true;
   
   }
   return false;
}

export default shipIsVertical;
