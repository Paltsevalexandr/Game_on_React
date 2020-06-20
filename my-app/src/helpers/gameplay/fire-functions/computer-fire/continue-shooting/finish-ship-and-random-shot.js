import randomShot from '../random-shot/random-shot';
import {addSunkenShip} from './helpers';
import createAllHatchings from '../../computer-hatchings/create-all-hatchings';

const finishShipAndRandomShot = (matrix, labels, defeatedShips) => {

   const {updatedLabels, updatedMatrix } = createAllHatchings(matrix, labels, defeatedShips);
      
   const { 
      defeatedShips: {currentTarget},
      target } = randomShot(updatedMatrix, defeatedShips);
   
   return {
      target,
      updatedMatrix,
      updatedLabels,
      defeatedShips: {
         currentTarget,
         destroyedShips: addSunkenShip(defeatedShips)
      }
   };
}

export default finishShipAndRandomShot;
