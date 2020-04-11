import React from 'react';
import {BattleField} from './battleField.js';
import {CheckingShipsField} from './checkingShipsField.js';
// import {RotateShip} from './positionFunctions/rotateShip.js';
import {calcShipPosition} from './positionFunctions/calcShipPosition.js';

export class Field extends React.Component {
  constructor() {
    super();
    this.state = {
        checkingShips: ['fourdeck1',
        'threedeck1', 'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'], 
        battleShips: [],
        currentShip: '',
        currentShipOffsetX: '', currentShipOffsetY: '',
        canPlaceShip: true,
    };
  }

  handleShip = (currentShip) => {
    this.setState({currentShip,});
  }

  deleteSelectedShip = () => {
    this.setState(state => {
      const checkingShips = state.checkingShips.filter((item)=>item !== state.currentShip);
      return {checkingShips,} 
    });
  }

  addShip = (e) => {
    this.setState({
      battleShips: [
        ...this.state.battleShips, 
        {shipName: this.state.currentShip,
         leftIndent: calcShipPosition(e.nativeEvent.pageX, this.state.currentShipOffsetX),
         topIndent: calcShipPosition(e.nativeEvent.pageY, this.state.currentShipOffsetY),
         isRotate: false,
        }
      ]
    });
  }

  getCurrenShipOffsets(e) {
    this.setState({
      currentShipOffsetX: e.nativeEvent.offsetX,
      currentShipOffsetY: e.nativeEvent.offsetY
    })
  }
  foundForbiddenCells = e => {
    for(let ship of this.state.battleShips) {
      if(((e.pageY - this.state.currentShipOffsetY < parseInt(ship.topIndent) + 66) &&
          (e.pageY - this.state.currentShipOffsetY + 35 > parseInt(ship.topIndent) - 33)) &&
         ((e.pageX - this.state.currentShipOffsetX < parseInt(ship.leftIndent) + this.shipSize(ship.shipName) + 33) &&
          (e.pageX - this.state.currentShipOffsetX + this.shipSize(this.state.currentShip) > parseInt(ship.leftIndent) - 33))) {
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

  changeBattleShipPosition = e => {
    const selectedChipPageX = e.nativeEvent.pageX;
    const selectedChipPageY = e.nativeEvent.pageY;
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip){
          item.leftIndent = calcShipPosition(selectedChipPageX, state.currentShipOffsetX);
          item.topIndent = calcShipPosition(selectedChipPageY, state.currentShipOffsetY);
          return item;
        }else {
          return item;
        }
      });
      return {battleShips,};
    });
  }

  rotateShip = () => {
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip){
          item.isRotate = !item.isRotate;
          return item;
        }else {
          return item;
        }
      });
      return {battleShips,};
    });
  }
  render() {
    return(
      <div className = "gameField">
        <div className = "battleFieldWrap">
          <BattleField
            currentShip = {this.state.currentShip}
            battleShips = {this.state.battleShips}
            checkingShips = {this.state.checkingShips}
            deleteSelectedShip = {this.deleteSelectedShip}
            addShip = {this.addShip}
            handleShip = {this.handleShip}
            changeBattleShipPosition = {this.changeBattleShipPosition}
            foundForbiddenCells = {this.foundForbiddenCells}
            rotateShip = {this.rotateShip}
            getCurrenShipOffsets = {e=>this.getCurrenShipOffsets(e)}
          />
          <BattleField
            battleShips = {[]}
          />
        </div>
        <CheckingShipsField
          checkingShips = {this.state.checkingShips}
          handleShip = {this.handleShip}
          foundForbiddenCells = {this.foundForbiddenCells}
          rotateShip = {null}
          getCurrenShipOffsets = {e=>this.getCurrenShipOffsets(e)}
        />
        <div style = {{color: this.state.canPlaceShip ? 'black' : 'red'}}>{this.state.canPlaceShip ? 'cool' : 'BAD!!!'}</div>
      </div>
    )
  }
}
