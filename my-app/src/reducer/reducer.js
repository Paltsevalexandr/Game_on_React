import updateGamerState from './update-gamer-state';
import updateComputerState from './update-computer-state'

const reducer = (state, action) => {
  return {
    gamerState: updateGamerState(state, action),
    compState: updateComputerState(state, action)
  }
}

export default reducer;