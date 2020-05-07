import createAllShips from './common-functions/random-place-of-ships/create-all-ships';

const updateComputerState = (state, action) => {

  if(state === undefined) {
    return {
      checkingShips: ['fourdeck1', 'threedeck1', 
        'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'
      ], 
      battleShips: [],
      matrix: Array(10).fill(Array(10).fill([]))
    }
  }
  
  const {computerState} = state;

  switch(action.type) {
    case 'CREATE_ALL_SHIPS':
      const {battleShips, matrix} = createAllShips(computerState);
      return {
        ...state,
        battleShips,
        matrix 
      };

    default:
      return computerState;
  }
}

export default updateComputerState;