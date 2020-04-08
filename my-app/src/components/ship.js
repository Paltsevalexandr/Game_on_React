import React from 'react';
// import PropTypes from 'prop-types';
// import {BattleField} from './battleField.js';

export class Ship extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div 
        className = {"ship " + this.props.shipSize}
        style = {{left: this.props.shipX, top: this.props.shipY}}
        onDragStart = {e=>{
          this.props.handleShip(this.props.shipSize);
          this.props.getOffsets(e)
        }}
        draggable = 'true'>
      </div>
    )
  }
}
