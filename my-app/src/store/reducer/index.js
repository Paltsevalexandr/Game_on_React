import gamerState from './gamer-state';
import computerState from './computer-state';
import gameplayState from './gameplay-state';

const reducer = (state = {}, action) => {
  return {
    gamerState: gamerState(state.gamerState, action),
    computerState: computerState(state.computerState, action),
    gameplayState: gameplayState(state.gameplayState, action)
  }
}

export default reducer;
