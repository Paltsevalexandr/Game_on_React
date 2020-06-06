import verticalDeckBetweenLabels from './vertical-deck-between-labels';

const shipIsVertical = (matrix, {decks, borders}) => {
   const {rowNum: deckRow, colNum: deckCol} = decks[0];

   if(( deckCol === 9 
     && borders.length > 0 
     && ( borders.find(({colNum}) => colNum === 8)
       || matrix[deckRow][8].marked === true))

   || ( deckCol === 0 
     && borders.length > 0
     && ( borders.find(({colNum}) => colNum === 1)
       || matrix[deckRow][1].marked === true))

   || (decks.length > 1 && deckCol === decks[1].colNum)

   || ( decks.length === 1
     && borders.length > 1
     && verticalDeckBetweenLabels(matrix, decks, borders))) {
      
      return true;
   
   }
   return false;
}

export default shipIsVertical;
