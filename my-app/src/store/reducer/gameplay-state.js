const initialState = {
  gamer: 1,
};

const gameplayState = (state = initialState, action) => {
  
  switch(action.type) {
    case 'SELECT_GAMER':
      return {
        ...state,
        gamer: action.gamer,
      }

    default:
      return state;
  }
}

export default gameplayState;
