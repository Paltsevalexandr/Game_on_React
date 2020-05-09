import createAllShips from './common-functions/random-place-of-ships/create-all-ships';
import addDot from './common-functions/dots/add-label';

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
      matrix: Array(10).fill(Array(10).fill(0))
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
    
    case 'CREATE_DOT':
      const {matrix: updatedMatrix, labels} = addDot(computerState, action);
      return {
        ...computerState,
        labels,
        matrix: updatedMatrix,
      }

    case 'showState':
      console.log(computerState);
      return computerState;

    default:
      return computerState;
  }
}

export default updateComputerState;
