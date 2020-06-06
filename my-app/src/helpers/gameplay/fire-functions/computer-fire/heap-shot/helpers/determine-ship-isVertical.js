import {
   shipIsVertical,
   shipIsHorizontal,
   undefinedOrientation } from './ship-orientation-conditions';

const determineShipIsVertical = (matrix, {currentTarget}) => {
   
   if(undefinedOrientation(currentTarget)) {
      return undefined;

   } else if(shipIsVertical(matrix, currentTarget)) {

      return true;

   }else if(shipIsHorizontal(currentTarget)) {
      return false;
   }
   
   return undefined;
}

export default determineShipIsVertical;
