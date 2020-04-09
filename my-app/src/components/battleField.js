import React from 'react';
import {Ship} from './ship.js';

export class BattleField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  prevDefault(e) {
    e.preventDefault();
  }
  test() {
    alert('cool')
  }
  render() {
    let battleShips;
    if(this.props.battleShips.length > 0) {
      battleShips = this.props.battleShips.map((item, index) => {
        return(
          <Ship
            key = {index}
            shipSize = {item.shipName +' battleShip'}
            handleShip = {this.props.handleShip}
            getOffsets = {e=>this.props.getOffsets(e)}
            foundForbiddenCells = {e=>this.props.foundForbiddenCells(e)}
            shipX = {item.shipX}
            shipY = {item.shipY}
          />
        );
      });
    }
    return(
      <div className = "battleField" 
        onDrop = {(e)=>{
            this.props.addShip(e, this.props.currentShip);
            this.props.deleteCheckingShip(this.props.currentShip);
          }}
        onClick = {this.test.bind(this)}
        onDragOver = {this.prevDefault.bind(this)}>
        {battleShips}
      </div>
    )
  }
}
