const determineShipName = decks => {
   switch(decks.length) {

      case 1:
         return 'onedeck';

      case 2: 
         return 'twodeck';

      case 3:
         return 'threedeck';

      case 4:
         return 'fourdeck';
      
      default: 
         return undefined
   }
}

export default determineShipName;
