import React from 'react';
import {connect} from 'react-redux';
import {createOrDeleteHatching, getGamerFire, selectGamer, getComputerFire} from '../../store/actions';

import ComputerField from './computer-field';
import Labels from '../labels/labels';

class ComputerFieldContainer extends React.Component {

  componentDidUpdate({gamerLabels: prevGamerLabels}) {

    const {
      gamerLabels, 
      selectGamer, 
      getComputerFire, 
      gamer} = this.props;

    const prevDots = this.dotsCounter(prevGamerLabels);
    const dots = this.dotsCounter(gamerLabels);

    if(prevDots < dots) {
      selectGamer(1);

    }else if(prevDots === dots && gamer === 2){
      setTimeout(getComputerFire, 600);
    }
  }

  dotsCounter = labels => {
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

  render() {
    const {
        labels,
        createOrDeleteHatching,
        getGamerFire,
        selectGamer,
        gamer,
        gameMode } = this.props;
  
    return (
      <ComputerField 
        createOrDeleteHatching  = {createOrDeleteHatching}
        selectGamer  = {selectGamer}
        getGamerFire = {getGamerFire}
        dotsCounter  = {this.dotsCounter}
        gameMode     = {gameMode}
        labels = {labels}
        gamer  = {gamer}>

        <Labels labels = {labels} />
      </ComputerField>
    );
  }
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
  {createOrDeleteHatching, getGamerFire, selectGamer, getComputerFire}
)(ComputerFieldContainer);
