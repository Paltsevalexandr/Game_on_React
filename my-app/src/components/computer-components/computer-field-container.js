import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {createOrDeleteHatching, getGamerFire, selectGamer, computerFire, selectWinner} from '../../store/actions';

import ComputerField from './computer-field';
import Labels from '../labels/labels';

const ComputerFieldContainer = ({
  selectGamer, 
  computerFire, 
  createOrDeleteHatching,
  getGamerFire,
  gameMode,
  gamer,
  destroyedShips,
  labels,
  selectWinner,
  gamerLabels }) => {
  
  const prevDots = useRef();
  if(!prevDots.current) prevDots.current = 0;

  useEffect(() => {    
    if(destroyedShips.length === 1) {
      selectWinner('computer');

    }else if(defeatedDecksCounter() === 20) {
      selectWinner('gamer');

    }else {
      const dots = dotsCounter(gamerLabels);
      
      if(prevDots.current < dots) selectGamer(1);

      if(prevDots.current === dots && gamer === 2){
        setTimeout(computerFire, 750);
      }
      prevDots.current = dots;
    }
  });

  const dotsCounter = labels => {
    const dots = labels.filter(({type}) => type === 'dot');

    return dots.length;
    
  }

  const defeatedDecksCounter = () => {
    const defeatedDecks = labels.filter(({type}) => type === 'cross');

    return defeatedDecks.length;
  }

  return (
    <ComputerField 
      createOrDeleteHatching  = {createOrDeleteHatching}
      selectGamer   = {selectGamer}
      getGamerFire  = {getGamerFire}
      dotsCounter   = {dotsCounter}
      gameMode      = {gameMode}
      labels        = {labels}
      gamer         = {gamer}
    >
      <Labels labels = {labels} />
    </ComputerField>
  );
}

const mapStateToProps = ({
  computerState: {labels},
  gameplayState: {gamer},
  gamerState: {labels: gamerLabels, defeatedShips: {destroyedShips}}, win}) => {

    return {
      destroyedShips,
      labels,
      gamer,
      gamerLabels,
      win
    }
}

export default connect(
  mapStateToProps, 
  {createOrDeleteHatching, getGamerFire, selectGamer, computerFire, selectWinner}
)(ComputerFieldContainer);
