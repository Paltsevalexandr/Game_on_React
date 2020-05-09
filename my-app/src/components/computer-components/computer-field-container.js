import React from 'react';
import {connect} from 'react-redux';
import ComputerField from './computer-field';
import Dots from '../labels/labels';
import * as actions from '../../actions';

class ComputerFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    const {createAllShips} = props;

    createAllShips();
  }

  render() {
    const {battleShips, createDot, labels}  = this.props;
   
    return (
      <ComputerField 
        battleShips = {battleShips}
        createDot = {createDot}>

        <Dots labels = {labels} />

      </ComputerField>
    );
  }
}

const mapStateToProps = ({computerState: {battleShips, labels}}) => {
  return {
    battleShips,
    labels
  }
}

export default connect(mapStateToProps, actions)(ComputerFieldContainer);
