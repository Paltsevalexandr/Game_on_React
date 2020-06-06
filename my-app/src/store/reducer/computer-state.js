import createAllShips from '../../helpers/common-functions/random-place-of-ships/create-all-ships';
import addLabel from '../../helpers/common-functions/labels/add-label';
import addHatching from '../../helpers/gameplay/gamer-hatchings/add-hatching';
import gamerFire from '../../helpers/gameplay/fire-functions/gamer-fire/gamer-fire';

const initialState = {
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
        .fill({type: null}))
};

const computerState = (state = initialState, action) => {
  
  switch(action.type) {
    case 'CREATE_ALL_SHIPS':

      return {
        ...state,
        ...createAllShips(state, 595)
      };
    
    case 'CREATE_LABEL':
      return {
        ...state,
        ...addLabel(state, action)
      }
    
    case 'ADD_HATCHING':
      return addHatching(state, action);

    case 'GET_GAMER_FIRE':
      const fieldIndents = {fieldTop: 132, fieldLeft: 594};
      return gamerFire(state, action, fieldIndents);
    

    default:
      return state;
  }
}

export default computerState;
