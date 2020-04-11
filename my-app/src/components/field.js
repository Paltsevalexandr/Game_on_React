import React from 'react';
import {BattleField} from './battleField.js';
import {CheckingShipsField} from './checkingShipsField.js';
import {calcShipHeight} from './positionFunctions/calcShipHeight.js';
import {calcShipWidth} from './positionFunctions/calcShipWidth.js';

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
         shipWidth: calcShipWidth(this.state.currentShip, false),
         shipHeight: calcShipHeight(this.state.currentShip, false),
         leftIndent: this.calcShipPosition(e.nativeEvent.pageX, this.state.currentShipOffsetX, calcShipWidth(this.state.currentShip, false)),
         topIndent: this.calcShipPosition(e.nativeEvent.pageY, this.state.currentShipOffsetY, calcShipHeight(this.state.currentShip, false)),
         isVertical: false,
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
      if(((e.pageY - this.state.currentShipOffsetY < parseInt(ship.topIndent) + ship.shipHeight + 33) &&
          (e.pageY - this.state.currentShipOffsetY + 33 > parseInt(ship.topIndent) - 33)) &&
         ((e.pageX - this.state.currentShipOffsetX < parseInt(ship.leftIndent) + ship.shipWidth + 33) &&
          (e.pageX - this.state.currentShipOffsetX + this.currentShipWidth(this.state.currentShip) > parseInt(ship.leftIndent) - 33))) {
        this.setState({canPlaceShip: false});
      }else {
        this.setState({canPlaceShip: true});
      }
    }
  }

  currentShipWidth(shipName) {
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
          item.leftIndent = this.calcShipPosition(selectedChipPageX, state.currentShipOffsetX, item.shipWidth);
          item.topIndent = this.calcShipPosition(selectedChipPageY, state.currentShipOffsetY, item.shipHeight);
          return item;
        }else {
          return item;
        }
      });
      return {battleShips,};
    });
  }

  calcShipPosition = (shipPageXY, shipOffsetXY, shipSize) => {
    let shipCoordinates = shipPageXY - shipOffsetXY;

    if(shipCoordinates > 165) {
      let excess = (shipCoordinates - 132) % 33;
  
      if(shipCoordinates >= (462 - shipSize)) {
        return shipCoordinates = (462 - shipSize);
      }else if(excess >= 15) {
        return shipCoordinates += (33 - excess);
      }else if(excess < 15) {
        return shipCoordinates -= excess;
      }
  
    }else if(shipCoordinates >=145 && shipCoordinates <= 165) {
      return shipCoordinates = 165;
    }else if(shipCoordinates < 145) {
      return shipCoordinates = 133;
    }
  }

  rotateShip = () => {
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip){
          item.shipWidth = calcShipWidth(item.shipName, !item.isVertical);
          item.shipHeight = calcShipHeight(item.shipName, !item.isVertical);
          item.leftIndent = this.calcShipPosition(item.leftIndent, 0, item.shipWidth);
          item.topIndent = this.calcShipPosition(item.topIndent, 0, item.shipHeight);
          item.isVertical = !item.isVertical;
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
