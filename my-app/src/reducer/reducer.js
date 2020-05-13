import updateGamerState from './update-gamer-state';
import updateComputerState from './update-computer-state';
import updateGameplayState from './update-gameplay-state';

const reducer = (state, action) => {
  return {
    gamerState: updateGamerState(state, action),
    computerState: updateComputerState(state, action),
    gameplayState: updateGameplayState(state, action)
  }
}

export default reducer;
