import React from 'react';
import {connect} from 'react-redux';
import ComputerField from './computer-field';
import Labels from '../labels/labels';
import * as actions from '../../actions';

class ComputerFieldContainer extends React.Component {
  
  componentDidUpdate({gamerLabels: prevGamerLabels}) {
    const {gamerLabels, selectGamer, getComputerFire, gamer} = this.props;

    const prevDots = this.dotsCount(prevGamerLabels);
    const dots = this.dotsCount(gamerLabels);
    
    if(prevDots < dots) {
      selectGamer(1);

    }else if(prevDots === dots && gamer === 2){
      setTimeout(getComputerFire, 600);
    }
  }

  dotsCount = labels => {
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
        battleShips, 
        labels,
        shotCounter,
        makeHatching,
        getGamerFire,
        selectGamer } = this.props;

    return (
      <ComputerField 
        battleShips  = {battleShips}
        makeHatching = {makeHatching}
        selectGamer  = {selectGamer}
        getGamerFire = {getGamerFire}>

        <Labels labels = {labels} />
      </ComputerField>
    );
  }
}

const mapStateToProps = ({
  computerState: {battleShips, labels},
  gameplayState: {shotCounter, gamer},
  gamerState: {labels: gamerLabels}
}) => {

  return {
    battleShips,
    labels,
    shotCounter,
    gamer,
    gamerLabels
  }
}

export default connect(mapStateToProps, actions)(ComputerFieldContainer);
