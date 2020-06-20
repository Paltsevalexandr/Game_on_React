const selectGamer = gamer => {
  return {
    type: 'SELECT_GAMER',
    gamer
  }
}

const selectWinner = winner => {
  return {
    type: 'SELECT_WINNER',
    winner
  }
}

export {
  selectGamer,
  selectWinner
};
