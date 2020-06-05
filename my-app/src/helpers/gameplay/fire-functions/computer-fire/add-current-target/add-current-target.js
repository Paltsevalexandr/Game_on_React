import checkCurrentTarget from './check-current-target';

const addCurrentTarget = (currentTarget, destroyedShips, isVertical) => {

   if(currentTarget) {
      let {target, name, ...rest} = checkCurrentTarget(currentTarget, isVertical);
      
      return {
         target,
         defeatedShips: {
            currentTarget: {name, ...rest},
            destroyedShips: 
               name
               ? [name, ...destroyedShips]
               : [...destroyedShips]
         }
      }
   }
   return false;
}

export default addCurrentTarget;
