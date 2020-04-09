import React from 'react';
import {BattleField} from './battleField.js';
import {ShipField} from './shipField.js';
import {RotateShip} from './positionFunctions/rotateShip.js';
import {calcShipPosition} from './positionFunctions/calcShipPosition.js';

export class Field extends React.Component {
  constructor() {
    super();
    this.state = {
        checkingShips: ['fourdeck1',
        'threedeck1', 'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'], 
        battleShips: [], currentShip: '',
        currentShipOffsetX: '', currentShipOffsetY: '',
        canPlaceShip: true,
      };

    this.handleShip = this.handleShip.bind(this);
    this.addShip = this.addShip.bind(this);
    this.deleteCheckingShip = this.deleteCheckingShip.bind(this);
  }

  handleShip(currentShip) {
    this.setState({currentShip,});
  }

  addShip(e, shipName) {
    this.setState({
      battleShips: [
        ...this.state.battleShips, 
        {shipName,
         shipX: calcShipPosition(e.nativeEvent.pageX, this.state.currentShipOffsetX),
         shipY: calcShipPosition(e.nativeEvent.pageY, this.state.currentShipOffsetY)
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

  getOffsets(e) {
    this.setState({
      currentShipOffsetX: e.nativeEvent.offsetX,
      currentShipOffsetY: e.nativeEvent.offsetY
    })
  }
  foundForbiddenCells(e) {
    for(let ship of this.state.battleShips) {
      if(((e.pageY - this.state.currentShipOffsetY < parseInt(ship.shipY) + 66) &&
          (e.pageY - this.state.currentShipOffsetY + 35 > parseInt(ship.shipY) - 33)) &&
         ((e.pageX - this.state.currentShipOffsetX < parseInt(ship.shipX) + this.shipSize(ship.shipName) + 33) &&
          (e.pageX - this.state.currentShipOffsetX + this.shipSize(this.state.currentShip) > parseInt(ship.shipX) - 33))) {
        this.setState({canPlaceShip: false});
      }else {
        this.setState({canPlaceShip: true});
      }
    }
  }
  shipSize(shipName) {
    if(shipName.slice(0, -1) === 'fourdeck'){
      return 132;
    }else if(shipName.slice(0, -1) === 'threedeck'){
      return 99;
    }else if(shipName.slice(0, -1) === 'twodeck'){
      return 66;
    }else if(shipName.slice(0, -1) === 'onedeck'){
      return 33;
    }
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
            handleShip = {this.handleShip}
            getOffsets = {e=>this.getOffsets(e)}
            foundForbiddenCells = {e=>this.foundForbiddenCells(e)}
          />
          <BattleField
            battleShips = {[]}
          />
        </div>
        <ShipField
          checkingShips = {this.state.checkingShips}
          handleShip = {this.handleShip}
          getOffsets = {e=>this.getOffsets(e)}
          foundForbiddenCells = {e=>this.foundForbiddenCells(e)}
        />
        <RotateShip

        />
        <div style = {{color: this.state.canPlaceShip ? 'black' : 'red'}}>{this.state.canPlaceShip ? 'cool' : 'bad'}</div>
      </div>
    )
  }
}
