import createAllShips from './common-functions/random-place-of-ships/create-all-ships';
import addLabel from './common-functions/labels/add-label';
import addHatching from './common-functions/labels/hatchings/add-hatching';
import gamerFire from './gameplay/fire-functions/gamer-fire/gamer-fire';

const updateComputerState = (state, action) => {

  if(state === undefined) {
    return {
      checkingShips: ['fourdeck1', 'threedeck1', 
        'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'
      ], 
      battleShips: [],
      labels: [],
      matrix: 
        Array(10)
        .fill(Array(10)
        .fill({type: null, isHurt: false})),
      shotCounter: 0
    }
  }
  
  const {computerState} = state;

  switch(action.type) {
    case 'CREATE_ALL_SHIPS':
      const {battleShips, matrix} = createAllShips(computerState, 595);

      return {
        ...computerState,
        battleShips,
        matrix
      };
    
    case 'CREATE_LABEL':
      const {matrix: updatedMatrix, labels} = addLabel(computerState, action);
      return {
        ...computerState,
        labels,
        matrix: updatedMatrix,
      }
    
    case 'MAKE_HATCHING':
      return addHatching(computerState, action);

    case 'GET_GAMER_FIRE':
      const fieldIndents = {fieldTop: 132, fieldLeft: 594};
      return gamerFire(computerState, action, fieldIndents);
    

    default:
      return computerState;
  }
}

export default updateComputerState;
