import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {createOrDeleteHatching, getGamerFire, selectGamer, computerFire} from '../../store/actions';

import ComputerField from './computer-field';
import Labels from '../labels/labels';

const ComputerFieldContainer = ({
  selectGamer, 
  computerFire, 
  createOrDeleteHatching,
  getGamerFire,
  gameMode,
  gamer,
  labels,
  gamerLabels }) => {
  
  const prevDots = useRef();
  if(!prevDots.current) prevDots.current = 0;

  useEffect(() => {
    const dots = dotsCounter(gamerLabels);
      
    if(prevDots.current < dots) selectGamer(1);

    if(prevDots.current === dots && gamer === 2){
      setTimeout(computerFire, 750);
    }
    prevDots.current = dots;
  });

  function dotsCounter(labels) {
    let count = 0;

    if(labels.length > 0) {  
      for(let label of labels) {
        if(label.type === 'dot') {
          count++;
        }
      }
    }
    return count;
  }

  return (
    <ComputerField 
      createOrDeleteHatching  = {createOrDeleteHatching}
      selectGamer   = {selectGamer}
      getGamerFire  = {getGamerFire}
      dotsCounter   = {dotsCounter}
      gameMode      = {gameMode}
      labels        = {labels}
      gamer         = {gamer}>

      <Labels labels = {labels} />
    </ComputerField>
  );
}

const mapStateToProps = ({
  computerState: {labels},
  gameplayState: {gamer},
  gamerState: {labels: gamerLabels} }) => {

    return {
      labels,
      gamer,
      gamerLabels
    }
}

export default connect(
  mapStateToProps, 
  {createOrDeleteHatching, getGamerFire, selectGamer, computerFire}
)(ComputerFieldContainer);
