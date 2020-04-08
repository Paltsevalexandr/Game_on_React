import React from 'react';
import {BattleField} from './battleField.js';
import {ShipField} from './shipField.js';

export class Field extends React.Component {
  constructor() {
    super();
    this.state = {
        checkingShips: ['fourdeck1', 'threedeck1', 
          'threedeck2','twodeck1', 'twodeck2',
          'twodeck3', 'onedeck1', 'onedeck2',
          'onedeck3', 'onedeck4'], 
        battleShips: [], currentShip: '',
        currentShipOffsetX: '', currentShipOffsetY: ''
      };

    this.addShip = this.addShip.bind(this);
    this.deleteCheckingShip = this.deleteCheckingShip.bind(this)
  }

  handleShip(thisShipName) {
    this.setState({currentShip: thisShipName});
  }

  addShip(e, shipName) {
    console.log(shipName);
    this.setState({
      battleShips: [
        ...this.state.battleShips, 
        {shipName: shipName,
         shipX: e.nativeEvent.offsetX - 27 + 105 - this.state.currentShipOffsetX + 'px', // 27 - padding-left 
         shipY: e.nativeEvent.offsetY - 25 + 106 - this.state.currentShipOffsetY + 'px'  // 25 - padding-top
        }]}, ()=>console.log(this.state.battleShips));
  }

  deleteCheckingShip(shipName) {
    this.setState(state => {
      const checkingShips = state.checkingShips.filter((item)=>item !== shipName);
      return {checkingShips,}
    });
  }

  getOffsets(e) {
    this.setState({
      battleShipOffsetX: e.nativeEvent.offsetX,
      battleShipOffsetY: e.nativeEvent.offsetY
    })
  }
  render() {
    return(
      <div className = "gameField">
        <div className = "battleFieldWrap">
          <BattleField
            battleShips = {this.state.battleShips}
            currentShip = {this.state.currentShip}
            deleteCheckingShip = {this.deleteCheckingShip}
            addShip = {this.addShip}
            handleShip = {this.handleShip.bind(this)}
            getOffsets = {e=>this.getOffsets(e)}
          />
          <BattleField
            battleShips = {[]}
          />
        </div>
        <ShipField
          checkingShips = {this.state.checkingShips}
          handleShip = {this.handleShip.bind(this)}
          getOffsets = {e=>this.getOffsets(e)}
        />
      </div>
    )
  }
}
