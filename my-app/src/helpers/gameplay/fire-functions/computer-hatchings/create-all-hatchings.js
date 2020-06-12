import calcHatchingsCoordinates from './calc-hatchings-coordinates';
import createHatching from './create-hatching';
import addHatchingToMatrix from './add-hatching-to-matrix';

const createAllHatchings = (matrix, labels, {currentTarget}) => {
   
   const hatchings = calcHatchingsCoordinates(currentTarget);

   for(let hatching of hatchings) {
      const {colNum, rowNum} = hatching;

      if(matrix[rowNum] && matrix[rowNum][colNum]) {
         
         if( !matrix[rowNum][colNum].marked ) {
            matrix = addHatchingToMatrix(matrix, hatching);
            labels.push( createHatching(hatching) );
         }
      }
   }

   return {
      updatedMatrix: matrix,
      updatedLabels: labels
   }
}

export default createAllHatchings;