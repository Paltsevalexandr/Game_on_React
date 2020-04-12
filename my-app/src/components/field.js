import React from 'react';
import {BattleField} from './battleField.js';
import {CheckingShipsField} from './checkingShipsField.js';
// import {RotateShip} from './positionFunctions/rotateShip.js';
//import {calcShipPosition} from './positionFunctions/calcShipPosition.js';
import {calcShipWidth} from './positionFunctions/calcShipWidth.js';
import {calcShipHeight} from './positionFunctions/calcShipHeight.js';

export class Field extends React.Component {
  constructor() {
    super();
    this.state = {
        checkingShips: ['fourdeck1',
        'threedeck1', 'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'], 
        battleShips: [],
        currentShip: {},
        canPlaceShip: true,
    };
  }

  createCurrentShip = (e, shipName) => {
    this.setState({currentShip: {
      name: shipName,
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      width: calcShipWidth(shipName, this.currentShipIsVertical(shipName)),
      height: calcShipHeight(shipName, this.currentShipIsVertical(shipName)),
      isVertical: this.currentShipIsVertical(shipName),
    }})
  }

  currentShipIsVertical = (currentShip) => {
    let isVertical = false;
    for(let ship of this.state.battleShips) {
      if(ship.shipName === currentShip) {
        isVertical = ship.isVertical;
      }
    }
    return isVertical;
  }

  deleteSelectedShip = () => {
    this.setState(state => {
      const checkingShips = state.checkingShips.filter((item)=>item !== state.currentShip.name);
      return {checkingShips,} 
    });
  }

  addShip = e => {
    this.setState({
      battleShips: [...this.state.battleShips,

        {shipName: this.state.currentShip.name,
         shipWidth: this.state.currentShip.width,
         shipHeight: this.state.currentShip.height,
         leftIndent: this.calcShipPosition(e.nativeEvent.pageX, this.state.currentShip.offsetX, this.state.currentShip.width),
         topIndent: this.calcShipPosition(e.nativeEvent.pageY, this.state.currentShip.offsetY, this.state.currentShip.height),
         isVertical: this.state.currentShip.isVertical,
        }
      ]
    });
  }

  calcShipPosition = (shipPageXY, shipOffsetXY, shipSize) => {
    let shipCoordinates = shipPageXY - shipOffsetXY;

    if(shipCoordinates > 165) {
      let excess = (shipCoordinates - 132) % 33;
  
      if(shipCoordinates >= (462 - shipSize)) {
        return shipCoordinates = (462 - shipSize);
      }else if(excess >= 18) {
        return shipCoordinates += (33 - excess);
      }else if(excess < 18) {
        return shipCoordinates -= excess;
      }
  
    }else if(shipCoordinates >=145 && shipCoordinates <= 165) {
      return shipCoordinates = 165;
    }else if(shipCoordinates < 145) {
      return shipCoordinates = 132;
    }
  }

  /*foundForbiddenCells = e => {
    for(let ship of this.state.battleShips) {
      if((((e.pageY - this.state.currentShip.offsetY) < (ship.topIndent + ship.shipHeight + 33)) &&   // bottom border
          ((e.pageY - this.state.currentShip.offsetY + this.state.currentShip.height) > (ship.topIndent - 33))) &&               // top border
         (((e.pageX - this.state.currentShip.offsetX) < (ship.leftIndent + ship.shipWidth + 33)) &&   //right side
          ((e.pageX - this.state.currentShip.offsetX + this.state.currentShip.width, false)) > (ship.leftIndent - 33))) {  // left side
        this.setState({canPlaceShip: false});
        console.log(this.state.battleShips)
      }else {
        this.setState({canPlaceShip: true});
      }
    }
  }*/
  foundForbiddenCells = e => {
    const selectChipPageX = e.nativeEvent.pageX;
    const selectChipPageY = e.nativeEvent.pageY;
    this.setState(state => {
      let canPlaceShip = true;
      if(state.battleShips.length >= 1){
        state.battleShips.map(ship => {
        if(selectChipPageY - this.state.currentShip.offsetY < ship.topIndent + ship.shipHeight + 33
        && selectChipPageY - this.state.currentShip.offsetY + this.state.currentShip.height > ship.topIndent - 33
        && selectChipPageX - this.state.currentShip.offsetX < ship.leftIndent + ship.shipWidth + 33
        && selectChipPageX - this.state.currentShip.offsetX + this.state.currentShip.width > ship.leftIndent - 33){
          return canPlaceShip = false;
        }else {
          return canPlaceShip = true;
        }
      });}
      return {canPlaceShip,}
    });
  }
  moveBattleShip = e => { ///добавить событие вглубь функции
    const selectedChipPageX = e.nativeEvent.pageX;
    const selectedChipPageY = e.nativeEvent.pageY;
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip.name){
          item.leftIndent = this.calcShipPosition(selectedChipPageX, state.currentShip.offsetX, item.shipWidth);
          item.topIndent = this.calcShipPosition(selectedChipPageY, state.currentShip.offsetY, item.shipHeight);
          console.log(selectedChipPageX);
          return item;
        }else {
          return item;
        }
      });
      return {battleShips,};
    }, ()=>console.log(this.state.battleShips));
  }

  rotateShip = () => {
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip.name) {
          item.shipWidth  = item.shipHeight;
          item.shipHeight = item.shipWidth;
          item.leftIndent = this.calcShipPosition(item.leftIndent, 0, item.shipWidth);
          item.topIndent  = this.calcShipPosition(item.topIndent, 0, item.shipHeight);
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
            currentShip   = {this.state.currentShip}
            battleShips       = {this.state.battleShips}
            checkingShips     = {this.state.checkingShips}
            canPlaceShip      = {this.state.canPlaceShip}
            addShip              = {this.addShip}
            deleteSelectedShip   = {this.deleteSelectedShip}
            createCurrentShip    = {this.createCurrentShip}
            foundForbiddenCells  = {this.foundForbiddenCells}
            moveBattleShip       = {this.moveBattleShip}
            rotateShip           = {this.rotateShip}
          />
          <BattleField
            battleShips = {[]}
          />
        </div>
        <CheckingShipsField
          checkingShips        = {this.state.checkingShips}
          canPlaceShip         = {this.state.canPlaceShip}
          createCurrentShip    = {this.createCurrentShip}
          foundForbiddenCells  = {this.foundForbiddenCells}
        />
        <div style = {{color: this.state.canPlaceShip ? 'black' : 'red'}}>{this.state.canPlaceShip ? 'cool' : 'BAD!!!'}</div>
      </div>
    )
  }
}
