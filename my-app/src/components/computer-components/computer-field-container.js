import React from 'react';
import {connect} from 'react-redux';
import ComputerField from './computer-field';
import Labels from '../labels/labels';
import {createOrDeleteHatching, getGamerFire, selectGamer, getComputerFire} from '../../store/actions';

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
      setTimeout(getComputerFire, 350);
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
        battleShips, 
        labels,
        createOrDeleteHatching,
        getGamerFire,
        selectGamer,
        gamer } = this.props;
  
    return (
      <ComputerField 
        createOrDeleteHatching  = {createOrDeleteHatching}
        battleShips  = {battleShips}
        selectGamer  = {selectGamer}
        getGamerFire = {getGamerFire}
        dotsCounter  = {this.dotsCounter}
        labels = {labels}
        gamer  = {gamer}>

        <Labels labels = {labels} />
      </ComputerField>
    );
  }
}

const mapStateToProps = ({
  computerState: {battleShips, labels},
  gameplayState: {gamer},
  gamerState: {labels: gamerLabels} }) => {

    return {
      battleShips,
      labels,
      gamer,
      gamerLabels
    }
}

export default connect(
  mapStateToProps, 
  {createOrDeleteHatching, getGamerFire, selectGamer, getComputerFire}
)(ComputerFieldContainer);
