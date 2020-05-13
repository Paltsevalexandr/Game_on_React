const selectGamer = gamer => {
  return {
    type: 'SELECT_GAMER',
    gamer
  }
}

const incShotCounter = () => {
  return {
    type: 'INC_SHOT_COUNTER'
  }
}

export {
  selectGamer,
  incShotCounter
};
