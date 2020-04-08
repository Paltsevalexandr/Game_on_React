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
    console.log(this.state.currentShipOffsetY);
    this.setState({
      battleShips: [
        ...this.state.battleShips, 
        {shipName: shipName,
         shipX: this.calcShipPosition(e.nativeEvent.pageX, this.state.currentShipOffsetX),
         shipY: this.calcShipPosition(e.nativeEvent.pageY, this.state.currentShipOffsetY)
        }
      ]
    });
  }

  deleteCheckingShip(shipName) {
    this.setState(state => {
      const checkingShips = state.checkingShips.filter((item)=>item !== shipName);
      return {checkingShips,}
    });
  }
  calcShipPosition(a, b) {
    let shipPosition = a - b + 'px';
    return shipPosition;
  }


  getOffsets(e) {
    this.setState({
      currentShipOffsetX: e.nativeEvent.offsetX,
      currentShipOffsetY: e.nativeEvent.offsetY
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
