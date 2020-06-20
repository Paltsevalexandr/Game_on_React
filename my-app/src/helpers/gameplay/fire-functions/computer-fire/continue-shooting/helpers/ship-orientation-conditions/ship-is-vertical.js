const shipIsVertical = (matrix, {decks}) => {
   const {rowNum: deckRow, colNum: deckCol} = decks[0];

  
  if( ( decks.length === 1
    && deckCol > 0 && deckCol < 9
    && matrix[deckRow][deckCol - 1].marked
    && matrix[deckRow][deckCol + 1].marked)

  || ( deckCol === 0 
    && matrix[deckRow][1].marked)
  
  || ( deckCol === 9 
    && matrix[deckRow][8].marked === true)) {

     return true;
  
  }
  return false;
}

export default shipIsVertical;
