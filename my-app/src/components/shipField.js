import React from 'react';
import {Ship} from './ship.js';

export class ShipField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let ships = this.props.checkingShips.map((item, index)=> {
      return(
        <Ship
        shipSize = {item} 
        handleShip = {this.props.handleShip.bind(null)}
        getOffsets = {e=>this.props.getOffsets(e)}
        key = {index} 
        />
      );
    });
    return(
      <div className = "shipField">
        {ships}
      </div>
    )
  }
}