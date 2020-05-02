import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addShip, 
  getCurrentShip,
  createBattleShip,
  fillMatrix
  } from '../actions/actions';

import {ComputerGamerField} from './computer-gamer/compField.js'
import {BattleField} from './battleField.js';
import {BattleShips} from './battleShips.js';
import {DotsCreator} from './dotsCreator.js'
import {CheckingShipsField} from './checkingShipsField.js';
import {CheckingShips} from './checkingShips.js';
import {calcShipWidth} from './positionFunctions/calcShipWidth.js';
import {calcShipHeight} from './positionFunctions/calcShipHeight.js';

class Field extends React.Component {
  constructor() {
    super();
    this.state = {
        checkingShips: ['fourdeck1',
        'threedeck1', 'threedeck2', 'twodeck1',
        'twodeck2', 'twodeck3', 'onedeck1',
        'onedeck2', 'onedeck3', 'onedeck4'], 
        battleShips: [],
        currentShip: {},
        matrix: Array(10).fill(Array(10).fill([])),
        pageX: '',
        pageY: '',
    };
    // height and width of cells = 33px
    // battleField top = 132px
    // battleField left = 132px
  }

  createCurrentShip = (e, shipName) => {
    this.setState({currentShip: {
      name: shipName,
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      width: calcShipWidth(shipName, this.currentShipIsVertical(shipName)),
      height: calcShipHeight(shipName, this.currentShipIsVertical(shipName)),
      isVertical: this.currentShipIsVertical(shipName),
      decksNum: this.calcShipDecksNumber(shipName),
    }});
  }

  currentShipIsVertical = selectShip => {
    let isVertical = false;
    for(let ship of this.state.battleShips) {
      if(ship.name === selectShip) {
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

  // place ship methods

  addShip = e => {
    this.setState({
      battleShips: [...this.state.battleShips,

        {name: this.state.currentShip.name,
         width: this.state.currentShip.width,
         height: this.state.currentShip.height,
         left: this.calcShipPosition(e.nativeEvent.pageX, this.state.currentShip.offsetX, this.state.currentShip.width),
         top: this.calcShipPosition(e.nativeEvent.pageY, this.state.currentShip.offsetY, this.state.currentShip.height),
         decksNum: this.state.currentShip.decksNum,
         isVertical: this.state.currentShip.isVertical,
        }
      ]
    }, () => this.fillMatrix(this.state.battleShips[this.state.battleShips.length - 1]));
  }

  calcShipPosition = (shipPageXY, shipOffsetXY, shipSize) => {
    let shipCoordinates = shipPageXY - shipOffsetXY;

    if(shipCoordinates > 165) {
      let excess = (shipCoordinates - 132) % 33;
  
      if(shipCoordinates >= (462 - shipSize)) {
        return shipCoordinates = (462 - shipSize);
      }else if(excess > 0) {
        return shipCoordinates -= excess;
      }
  
    }else if(shipCoordinates >=155 && shipCoordinates <= 165) {
      return shipCoordinates = 165;
    }else if(shipCoordinates < 155) {
      return shipCoordinates = 132;
    }
  }

  calcShipDecksNumber = ship => {
    if(ship.slice(0, -1) === 'fourdeck') {
      return 4;
    }else if(ship.slice(0, -1) === 'threedeck') {
      return 3;
    }else if(ship.slice(0, -1) === 'twodeck') {
      return 2;
    }else if(ship.slice(0, -1) === 'onedeck') {
      return 1;
    }
  }

  // matrix methods

  fillMatrix = ship => {
    if(ship.isVertical === false) {
      this.setHorizontalShipInMatrix(ship);
    }else if(ship.isVertical === true) {
      this.setVerticalShipInMatrix(ship);
    }
  }

  setHorizontalShipInMatrix = ship => {
    let rowIndex = this.positionInMatrix(ship.top);
    let leftIndent = ship.left;

    this.setState(state => {
      let matrix = state.matrix.map((row, indexRow) => {
        if(indexRow === rowIndex) {
          let i = 0;
          row = row.map((item, indexCol) => {
            if(indexCol === this.positionInMatrix(leftIndent) && i < ship.decksNum) {
              item = [leftIndent, ship.top, {isHurt: false}];
              leftIndent += 33;
              i++;
              return item;
            }
            return item;
          });
        }
        return row;
      });
      return {matrix,}
    }, ()=>console.log(this.state.matrix));
  }

  setVerticalShipInMatrix = ship => {
    let topIndent = ship.top;
    let shipColIndex = this.positionInMatrix(ship.left);

    this.setState(state => {
      let i = 0;
      let matrix = state.matrix.map((row, indexRow) => {
        if(indexRow === this.positionInMatrix(topIndent) && i < ship.decksNum) {
          row = row.map((item, indexColumn) => {
            if(indexColumn === shipColIndex) {
              item = [ship.left, topIndent, {isHurt: false}];
              return item;
            }
            return item;
          });
          i++;
          topIndent += 33;
        }
        return row;
      });
      return {matrix,};
    }, ()=>console.log(this.state.matrix));
  }

  deleteShipFromMatrix = () => {
    for(let ship of this.state.battleShips) {
      if(ship.name === this.state.currentShip.name && ship.isVertical === false) {
        this.deleteHorizontalShipFromMatrix(ship);
      }else if(ship.name === this.state.currentShip.name && ship.isVertical === true) {
        this.deleteVerticalShipFromMatrix(ship);
      }
    }
  }

  deleteHorizontalShipFromMatrix = ship => {
    let rowIndex = this.positionInMatrix(ship.top);
    let leftIndent = ship.left;

    this.setState(state => {
      let matrix = state.matrix.map((row, indexRow) => {
        if(indexRow === rowIndex) {
          let i = 0;
          row = row.map((item, indexCol) => {
            if(indexCol === this.positionInMatrix(leftIndent) && i < ship.decksNum) {
              item = [];
              leftIndent += 33;
              i++;
              return item;
            }
            return item;
          });
        }
        return row;
      });
      return {matrix,}
    }, ()=>console.log(this.state.matrix));
  }

  deleteVerticalShipFromMatrix = ship => {
    let topIndent = ship.top;
    let shipColIndex = this.positionInMatrix(ship.left);

    this.setState(state => {
      let i = 0;
      let matrix = state.matrix.map((row, indexRow) => {
        if(indexRow === this.positionInMatrix(topIndent) && i < ship.decksNum) {
          row = row.map((item, indexColumn) => {
            if(indexColumn === shipColIndex) {
              item = [];
              return item;
            }
            return item;
          });
          i++;
          topIndent += 33;
        }
        return row;
      });
      return {matrix,};
    }, ()=>console.log(this.state.matrix));
  }

  positionInMatrix = coordinate => {
    let positionNumberInMass = (coordinate - 132) / 33;
    return positionNumberInMass;
  }

  moveBattleShip = e => {
    const shipPageX = e.nativeEvent.pageX;
    const shipPageY = e.nativeEvent.pageY;
    let selectedShip;

    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.name === state.currentShip.name){
          item.left = this.calcShipPosition(shipPageX, state.currentShip.offsetX, item.width);
          item.top = this.calcShipPosition(shipPageY, state.currentShip.offsetY, item.height);

          selectedShip = item;
          return item;
        }else {
          return item;
        }
      });
      return {battleShips,};
    }, () => this.fillMatrix(selectedShip));
  }

  // rotateShip methods

  setRotateShipInMatrix = selectedShip => {
    this.fillMatrix(selectedShip);
  }
  rotateShip = () => {
    //if(isShipCanRotate())
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.name === state.currentShip.name) {
          if(this.isCanRotate(item)) {
            item.width  = item.height;
            item.height = calcShipHeight(item.name, !item.isVertical);
            item.left = this.calcShipPosition(item.left, 0, item.width);
            item.top  = this.calcShipPosition(item.top, 0, item.height);
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
    }, () => this.deleteShipFromMatrix());    
  }

  isShipCanRotate = (e, ship) => {
    let shipLeft = this.calcShipPosition(e.nativeEvent.pageX, ship.offsetX, ship.width);
    let shipTop = this.calcShipPosition(e.nativeEvent.pageY, ship.offsetY, ship.height);

    let shipZoneTop = this.positionInMatrix(shipTop) - 1;
    let shipZoneLeft = this.positionInMatrix(shipLeft) - 1;
    let shipZoneRight;
    let shipZoneBottom;

    if(ship.isVertical === false) {
      shipZoneBottom = this.shipZoneSize(shipZoneTop, ship.decksNum);
      shipZoneRight = shipZoneLeft + 2;
    }else if(ship.isVertical === true) {
      shipZoneRight = this.shipZoneSize(shipZoneLeft, ship.decksNum);
      shipZoneBottom = shipZoneTop + 2;
    }
    
    if(shipZoneTop < 0) {
      shipZoneTop = 0;
    }
    if(shipZoneLeft < 0) {
      shipZoneLeft = 0;
    }
    if(shipZoneBottom > 9) {
      shipZoneBottom = 9;
    }
    if(shipZoneRight > 9) {
      shipZoneRight = 9;
    }

    let result = true;
    for(let i = shipZoneTop; i <= shipZoneBottom; i++) {
      for(let j = shipZoneLeft; j <= shipZoneRight; j++) {
        if(this.state.matrix[i][j].length > 0) {
          result = false;
          return result;
        }
      }
      if(result === false) {
        break;
      }
    }
    if(result === true) {
      this.deleteSelectedShip();
    }
    return result;
  }
  shipZoneSize = (coordinate, decksNum) => {
    let result = coordinate + decksNum + 1;
    if(result > 9) {
      result = 9;
    }
    return result;
  }

  isCanRotate = currentShip => {
    let canRotate = true;
    if(this.state.battleShips.length > 0){
      if(currentShip.isVertical === true) {
        canRotate = this.isVerticalShipCanRotate(currentShip, currentShip.decksNum);
      }else if(currentShip.isVertical === false) {
        canRotate = this.isHorizontalShipCanRotate(currentShip, currentShip.decksNum);
      }
    }
    return canRotate;
  }

  isVerticalShipCanRotate = (currentShip, shipSizeIndex) => {
    for(let ship of this.state.battleShips) {
      if(this.checkRightSideShipsTop(ship, currentShip, shipSizeIndex) === false
      || this.checkVerticalShips(currentShip) === false) {
        return false;
      }
    }
    return true;
  }

  checkVerticalShips = currentShip => {
    let battleShips = this.getVerticalShips();
    for(let ship of battleShips) {
      if(ship.left <= currentShip.left + currentShip.height // height will be width when ship rotate
      && ship.left >= currentShip.left) {
        console.log(currentShip.top)
        return this.checkVerticalShipsTop(currentShip.top, ship);
      }
    }
    return true;
  }

  checkVerticalShipsTop = (currentShipTop, battleShip) => {
    if(battleShip.top + battleShip.height >= currentShipTop - 33
    && battleShip.top + battleShip.height <= (currentShipTop + 66)) {
        return false;
    }
    return true;
  }

  getVerticalShips = () => {
    return this.state.battleShips.filter(item => item.isVertical === true && item.name !== this.state.currentShip.name);
  }

  checkRightSideShipsTop = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.top - 33;

    for(let i = 1; i < index; i++) {
      if(battleShip.top === currentShipFuturePosition) {
        return this.checkRightSideShipsLeftIndent(battleShip, currentShip, index);
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }
  checkRightSideShipsLeftIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.left + 66;
    for(let i = 1; i < index; i++) {
      if(battleShip.left === currentShipFuturePosition) {
        return false;
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }
  isHorizontalShipCanRotate = (currentShip, shipSizeIndex) => {
    for(let ship of this.state.battleShips) {
      if(this.checkBottomShipsLeftIndent(ship, currentShip, shipSizeIndex) === false || this.checkHorizontalShips(currentShip) === false) {
        return false;
      }
    }
    return true;
  }

  checkBottomShipsLeftIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.left - 33;

    for(let i = 1; i < index; i++) {
      if(battleShip.left === currentShipFuturePosition) {
        return this.checkBottomShipsTop(battleShip, currentShip, index);
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  checkBottomShipsTop = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.top + 66;
    for(let i = 1; i < index; i++) {
      if(battleShip.top === currentShipFuturePosition) {
        return false;
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  checkHorizontalShips = (currentShip) => {
    let battleShips = this.getHorizontalShips();
    for(let ship of battleShips) {
      if(ship.top <= currentShip.top + currentShip.width // width will be height when ship rotate
      && ship.top >= currentShip.top) {
        return this.checkHorizontalShipsLeftIndent(currentShip.left, ship);
      }
    }
    return true;
  }

  checkHorizontalShipsLeftIndent = (currentShipLeft, battleShip) => {
    if(battleShip.left + battleShip.width >= currentShipLeft - 33
    && battleShip.left + battleShip.width <= (currentShipLeft + 66)) {
        return false;
    }
    return true;
  }

  getHorizontalShips = () => {
    return this.state.battleShips.filter(item => item.isVertical === false && item.name !== this.state.currentShip.name);
  }

  // Dots methods

  getDotCoordinates = e => {
    this.setState({pageX: e.nativeEvent.pageX, pageY: e.nativeEvent.pageY});
  }

  showMatrix = () => {
    console.log(this.state.matrix);
  }
  render() {
    const {
      checkingShips, 
      battleShips, 
      currentShip, 
      matrix, 
      pageX, 
      pageY,
      addShip,
      getCurrentShip,
      createBattleShip,
      fillMatrix
    } = this.props;

    return(
      <div className = "gameField">
        <div className = "battleFieldWrap">
          <BattleField
            currentShip        = {this.state.currentShip}
            battleShips        = {this.state.battleShips}
            matrix             = {this.state.matrix}
            addShip            = {this.addShip}
            createBattleShip = {createBattleShip}
            fillMatrix       = {fillMatrix}
            deleteSelectedShip = {this.deleteSelectedShip}
            moveBattleShip     = {this.moveBattleShip}
            calcShipPosition   = {this.calcShipPosition}
            positionInMatrix   = {this.positionInMatrix}>

              <BattleShips
                battleShips          = {this.state.battleShips}
                createCurrentShip    = {this.createCurrentShip}
                rotateShip           = {this.rotateShip}
                deleteShipFromMatrix = {this.deleteShipFromMatrix}
              />

              <DotsCreator
                pageX = {this.state.pageX}
                pageY = {this.state.pageY}
              />
          </BattleField>
          <ComputerGamerField/>
        </div>
        <CheckingShipsField>
          <CheckingShips
            checkingShips       = {this.state.checkingShips}
            canPlaceShip        = {this.state.canPlaceShip}
            createCurrentShip   = {this.createCurrentShip}
            foundForbiddenCells = {this.foundForbiddenCells}
            getCurrentShip = {getCurrentShip}
          />
        </CheckingShipsField>
        <button onClick = {() => addShip()}>show matrix</button>
        <div style = {{color: this.state.canPlaceShip ? 'black' : 'red'}}>{this.state.canPlaceShip ? 'cool' : 'BAD!!!'}</div>
      </div>
    )
  }
}

const mapStateToProps = ({checkingShips, battleShips, currentShip, matrix, pageX, pageY}) => {
  return {
    checkingShips, 
    battleShips, 
    currentShip, 
    matrix, 
    pageX, 
    pageY
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addShip,
    getCurrentShip,
    createBattleShip,
    fillMatrix
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);

