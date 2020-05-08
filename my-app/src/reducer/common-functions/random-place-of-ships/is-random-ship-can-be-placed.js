import createShip from './create-ship';
import {checkShipPosition, isRandomShipBeyondField} from '../check-ship-position';
import {setShipInMatrix} from '../matrix-functions';

const isRandomShipCanBePlaced = ({currentShip, matrix}) => {

  if( isRandomShipBeyondField(currentShip)
  &&  checkShipPosition({currentShip, matrix})) {
    
    return {
      currentShip,
      newMatrix: setShipInMatrix({matrix}, currentShip)
    };
    
  }else {
    return createShip(matrix, currentShip.name, 595, 132);
  }
}

export default isRandomShipCanBePlaced;