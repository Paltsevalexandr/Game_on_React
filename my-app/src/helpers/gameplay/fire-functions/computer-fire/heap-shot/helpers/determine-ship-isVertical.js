import {
   shipIsVertical,
   shipIsHorizontal,
   undefinedOrientation } from './ship-orientation-conditions';

const determineShipIsVertical = (matrix, {currentTarget}) => {
   const {borders,decks} = currentTarget;
   if(borders.length >= 1) {
      console.log(borders)
      let result = borders.filter(({colNum}) => colNum > 0)
      console.log(result)
   }
   if(undefinedOrientation(currentTarget)) {
      return undefined;

   } else if(shipIsVertical(matrix, currentTarget)) {

      return true;

   }else if(shipIsHorizontal(matrix, currentTarget)) {
      return false;
   }
   console.log('und', currentTarget)
   return undefined;
}

export default determineShipIsVertical;
