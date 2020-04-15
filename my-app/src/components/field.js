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
    // height and width of cells = 33px
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
        if(item.shipName === state.currentShip.name) {
          if(this.isCanRotate(item)) {
            item.shipWidth  = item.shipHeight;
            item.shipHeight = calcShipHeight(item.shipName, !item.isVertical);
            item.leftIndent = this.calcShipPosition(item.leftIndent, 0, item.shipWidth);
            item.topIndent  = this.calcShipPosition(item.topIndent, 0, item.shipHeight);
            item.isVertical = !item.isVertical;
  
            return item;
          }else {
            return item;
          }
        }else {
          return item;
        }
      });
      return {battleShips,};
    });
  }

  isCanRotate = (currentShip) => {
    let shipSizeIndex = this.calcShipSizeIndex(currentShip.shipName);
    let canRotate = true;
    if(this.state.battleShips.length > 0){
      if(currentShip.isVertical === true) {
        canRotate = this.isVerticalShipCanRotate(currentShip, shipSizeIndex);
      }else if(currentShip.isVertical === false) {
        canRotate = this.isHorizontalShipCanRotate(currentShip, shipSizeIndex);
      }
    }
    return canRotate;
  }

  isVerticalShipCanRotate = (currentShip, shipSizeIndex) => {
    for(let ship of this.state.battleShips) {
      if(this.checkRightSideShipsTopIndent(ship, currentShip, shipSizeIndex) === false || this.checkVerticalShips(currentShip) === false) {
        return false;
      }
    }
    return true;
  }

  checkVerticalShips = (currentShip) => {
    let battleShips = this.getVerticalShips();
    for(let ship of battleShips) {
      if(ship.leftIndent <= currentShip.leftIndent + currentShip.shipHeight // shipHeight will be shipWidth when ship rotate
      && ship.leftIndent >= currentShip.leftIndent) {
        console.log(currentShip.topIndent)
        return this.checkVerticalShipsTopIndent(currentShip.topIndent, ship);
      }
    }
    return true;
  }

  checkVerticalShipsTopIndent = (currentShipTopIndent, battleShip) => {
    if(battleShip.topIndent + battleShip.shipHeight >= currentShipTopIndent - 33
    && battleShip.topIndent + battleShip.shipHeight <= (currentShipTopIndent + 66)) {
        return false;
    }
    return true;
  }

  getVerticalShips = () => {
    return this.state.battleShips.filter(item => item.isVertical === true && item.shipName !== this.state.currentShip.name);
  }

  checkRightSideShipsTopIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.topIndent - 33;

    for(let i = 1; i < index; i++) {
      if(battleShip.topIndent === currentShipFuturePosition) {
        return this.checkRightSideShipsLeftIndent(battleShip, currentShip, index);
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }
  checkRightSideShipsLeftIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.leftIndent + 66;
    for(let i = 1; i < index; i++) {
      if(battleShip.leftIndent === currentShipFuturePosition) {
        return false;
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  isHorizontalShipCanRotate = (currentShip, shipSizeIndex) => {
    for(let ship of this.state.battleShips) {
      if(this.checkBottomShipsLeftIndent(ship, currentShip, shipSizeIndex) === false/* || this.checkHorizontalShips(currentShip) === false*/) {
        return false;
      }
    }
    return true;
  }

  checkBottomShipsLeftIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.leftIndent - 33;

    for(let i = 1; i < index; i++) {
      if(battleShip.leftIndent === currentShipFuturePosition) {
        return this.checkBottomShipsTopIndent(battleShip, currentShip, index);
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  checkBottomShipsTopIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.topIndent + 66;
    for(let i = 1; i < index; i++) {
      if(battleShip.topIndent === currentShipFuturePosition) {
        return false;
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  checkHorizontalShips = (currentShip) => {
    let battleShips = this.getVerticalShips();
    for(let ship of battleShips) {
      if(ship.topIndent <= currentShip.topIndent + currentShip.shipWidth // shipWidth will be shipHeight when ship rotate
      && ship.topIndent >= currentShip.topIndent) {
        return this.checkVerticalShipsTopIndent(currentShip.leftIndent, ship);
      }
    }
    return true;
  }

  checkHorizontalShipsTopIndent = (currentShipLeftIndent, battleShip) => {
    if(battleShip.leftIndent + battleShip.shipHeight >= currentShipLeftIndent - 33
    && battleShip.leftIndent + battleShip.shipHeight <= (currentShipLeftIndent + 66)) {
        return false;
    }
    return true;
  }

  getHorizontalShips = () => {
    return this.state.battleShips.filter(item => item.isVertical === false && item.shipName !== this.state.currentShip.name);
  }

  calcShipSizeIndex = (shipName) => {
    if(shipName === 'fourdeck1') {
      return 4;
    }else if(shipName.slice(0, -1) === 'threedeck') {
      return 3;
    }else if(shipName.slice(0, -1) === 'twodeck') {
      return 2;
    }else if(shipName.slice(0, -1) === 'onedeck') {
      return 1;
    }
  }

  render() {
    return(
      <div className = "gameField">
        <div className = "battleFieldWrap">
          <BattleField
            currentShipName   = {this.state.currentShip.name}
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
