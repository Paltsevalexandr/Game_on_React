const determineShipIsVertical = ({decks, borders}) => {

   if((borders.length === 2 && borders[0].rowNum === borders[1].rowNum && decks.length === 1)
   || (decks.length > 1 && decks[0].colNum === decks[1].colNum)
   || (decks[0].colNum === 9 && borders[0].colNum === 8)
   || (decks[0].colNum === 0 && borders[0].colNum === 1)) {

      return true;
   }
   
   return false;
}

export default determineShipIsVertical;
