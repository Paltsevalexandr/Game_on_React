const initialState = {
  gamer: 1,
  winner: ''
};

const gameplayState = (state = initialState, action) => {
  
  switch(action.type) {
    case 'SELECT_GAMER':
      return {
        ...state,
        gamer: action.gamer,
      }

    case 'SELECT_WINNER':
      console.log('action ', action.winner)
      return {
        gamer: 0,
        winner: action.winner
      }

    default:
      return state;
  }
}

export default gameplayState;
