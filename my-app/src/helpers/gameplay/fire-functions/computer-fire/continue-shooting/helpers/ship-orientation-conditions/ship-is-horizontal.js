const shipIsHorizontal = ({decks}) => {

   if(decks.length > 1 
   && decks[0].rowNum === decks[1].rowNum) {
   
      return true;
   
   }
   return false;
}

export default shipIsHorizontal;
