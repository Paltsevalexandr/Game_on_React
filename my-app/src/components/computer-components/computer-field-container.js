import React from 'react';
import {connect} from 'react-redux';
import ComputerField from './computer-field';
import Dots from '../labels/labels';
import * as actions from '../../actions';

const ComputerFieldContainer = ({
  battleShips, 
  labels, 
  createLabel, 
  makeHatching }) => {
   
  return (
    <ComputerField 
      battleShips  = {battleShips}
      createLabel  = {createLabel}
      makeHatching = {makeHatching}>

      <Dots labels = {labels} />
    </ComputerField>
  );
}

const mapStateToProps = ({computerState: {battleShips, labels}}) => {
  return {
    battleShips,
    labels
  }
}

export default connect(mapStateToProps, actions)(ComputerFieldContainer);
