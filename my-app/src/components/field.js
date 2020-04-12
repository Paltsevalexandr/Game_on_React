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
        currentShip: null,
        currentShipOffsetX: '', currentShipOffsetY: '',
        canPlaceShip: true,
    };
  }

  getCurrentShip = currentShip => {
    this.setState({currentShip,});
  }

  deleteSelectedShip = () => {
    this.setState(state => {
      const checkingShips = state.checkingShips.filter((item)=>item !== state.currentShip);
      return {checkingShips,} 
    });
  }

  addShip = e => {
    this.setState({
      battleShips: [...this.state.battleShips,

        {shipName: this.state.currentShip,
         leftIndent: calcShipPosition(e.nativeEvent.pageX, this.state.currentShipOffsetX),
         topIndent: calcShipPosition(e.nativeEvent.pageY, this.state.currentShipOffsetY),
         isRotate: false,
        }
      ]
    });
  }

  getCurrenShipOffsets = e => {
    this.setState({
      currentShipOffsetX: e.nativeEvent.offsetX,
      currentShipOffsetY: e.nativeEvent.offsetY
    })
  }

  calcShipPosition = (shipPageXY, shipOffsetXY, shipSize) => {
    let shipCoordinates = shipPageXY - shipOffsetXY;

    if(shipCoordinates > 165) {
      let excess = (shipCoordinates - 132) % 33;
  
      if(shipCoordinates >= (462 - shipSize)) {
        shipCoordinates = (462 - shipSize);
      }else if(excess >= 15) {
        shipCoordinates += (33 - excess);
      }else if(excess < 15) {
        shipCoordinates -= excess;
      }
  
    }else if(shipCoordinates >=145 && shipCoordinates <= 165) {
      shipCoordinates = 165;
    }else if(shipCoordinates < 145) {
      shipCoordinates = 133;
    }
    return shipCoordinates;
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
    }, ()=>console.log(this.state.battleShips));
  }
  render() {
    return(
      <div className = "gameField">
        <div className = "battleFieldWrap">
          <BattleField
            currentShip   = {this.state.currentShip}
            battleShips   = {this.state.battleShips}
            checkingShips = {this.state.checkingShips}
            canPlaceShip  = {this.state.canPlaceShip}
            addShip                  = {this.addShip}
            deleteSelectedShip       = {this.deleteSelectedShip}
            getCurrentShip           = {this.getCurrentShip}
            foundForbiddenCells      = {this.foundForbiddenCells}
            changeBattleShipPosition = {this.changeBattleShipPosition}
            rotateShip               = {this.rotateShip}
            getCurrenShipOffsets     = {this.getCurrenShipOffsets}
          />
          <BattleField
            battleShips = {[]}
          />
        </div>
        <CheckingShipsField
          currentShip    = {this.state.currentShip}
          checkingShips  = {this.state.checkingShips}
          canPlaceShip   = {this.state.canPlaceShip}
          getCurrentShip = {this.getCurrentShip}
          foundForbiddenCells  = {this.foundForbiddenCells}
          getCurrenShipOffsets = {this.getCurrenShipOffsets}
        />
        <div style = {{color: this.state.canPlaceShip ? 'black' : 'red'}}>{this.state.canPlaceShip ? 'cool' : 'BAD!!!'}</div>
      </div>
    )
  }
}
