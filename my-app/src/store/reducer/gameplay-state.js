import chooseNextGamer from '../../helpers/gameplay/choose-next-gamer';

const initialState = {
  gamer: 1,
  shotCounter: 0
};

const gameplayState = (state = initialState, action) => {
  
  switch(action.type) {
    case 'SELECT_GAMER':
      return {
        ...state,
        gamer: action.gamer,
      }

    case 'INC_SHOT_COUNTER':
      return {
        ...state,
        shotCounter: state.shotCounter + 1
      };

    default:
      return state;
  }
}

export default gameplayState;
