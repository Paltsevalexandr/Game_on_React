import {
   shipIsVertical,
   shipIsHorizontal } from './ship-orientation-conditions';

const determineShipIsVertical = (matrix, {currentTarget}) => {
   
   if(shipIsVertical(matrix, currentTarget)) {

      return true;

   }else if(shipIsHorizontal(currentTarget)) {
      return false;
   }
   
   return undefined;
}

export default determineShipIsVertical;
