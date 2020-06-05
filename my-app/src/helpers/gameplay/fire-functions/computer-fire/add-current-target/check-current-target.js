import determineShipName from './determine-ship-name';

const checkCurrentTarget = ({borders, decks, target}, isVertical) => {
   let bordersNum = [];
   
   if(isVertical) {

      bordersNum = borders.filter(({colNum}) => colNum === decks[0].colNum);
   
   }else if(isVertical === false) {

      bordersNum = borders.filter(({rowNum}) => rowNum === decks[0].rowNum);
   }

   if(bordersNum.length === 2 && decks.length > 1) {
      return {
         name: determineShipName(decks),
         borders: [],
         decks: [],
         target,
         isVertical
      }
   }
   return {
      borders,
      decks,
      target,
      isVertical
   }
}

export default checkCurrentTarget;
