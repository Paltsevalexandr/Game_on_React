import React from 'react';
import {connect} from 'react-redux';
import RenderComputerField from './renderCompField';
import * as actions from '../../actions';

class ComputerField extends React.Component {
  constructor(props) {
    super(props);
    const {createAllShips} = props;

    createAllShips();
  }

  render() {
    const {battleShips}  = this.props;
   
    return (
      <RenderComputerField 
        battleShips = {battleShips}
      />
    );
  }
}

const mapStateToProps = ({computerState: {battleShips}}) => {
  return {
    battleShips
  }
}

export default connect(mapStateToProps, actions)(ComputerField);
