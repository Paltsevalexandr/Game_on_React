import {
   hatchingsForVerticalShip,
   hatchingsForHorizontalShip,
   hatchingsForOneDeckShip
} from './add-hatchings-coordinates';

const calcHatchingsCoordinates = ({decks, isVertical}) => {
   
   if(decks.length === 1) {
      return hatchingsForOneDeckShip(decks);

   }else if(isVertical) {
      return hatchingsForVerticalShip(decks);
   }

   return hatchingsForHorizontalShip(decks);
}

export default calcHatchingsCoordinates;
