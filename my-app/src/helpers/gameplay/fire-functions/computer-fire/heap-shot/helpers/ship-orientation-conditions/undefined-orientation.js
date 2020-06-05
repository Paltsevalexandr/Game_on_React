const undefinedOrientation = ({decks, borders}) => {
   
   if((decks.length === 1 && borders.length === 0)
   || ( decks.length === 1 
     && decks[0].colNum < 9 
     && decks[0].colNum > 0
     && decks[0].rowNum < 9 
     && decks[0].rowNum > 0
     && borders.length <= 1 )) {
         
      return true;
   
   }
   return false;
}

export default undefinedOrientation;
