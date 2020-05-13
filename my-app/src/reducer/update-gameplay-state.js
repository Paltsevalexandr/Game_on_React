import chooseNextGamer from '../reducer/gameplay/choose-next-gamer';

const updateGameplayState = (state, action) => {
  
  if(state === undefined) {
    return {
      gamer: 1,
      shotCounter: 0
    }
  }
  
  const {gameplayState} = state;

  switch(action.type) {
    case 'SELECT_GAMER':
      return {
        ...gameplayState,
        gamer: action.gamer,
      }

    case 'INC_SHOT_COUNTER':
      return {
        ...gameplayState,
        shotCounter: gameplayState.shotCounter + 1
      };

    default:
      return gameplayState;
  }
}

export default updateGameplayState;
