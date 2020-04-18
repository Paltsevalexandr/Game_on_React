import React from 'react';
import {calcShipWidth} from '../positionFunctions/calcShipWidth.js';
import {calcShipHeight} from '../positionFunctions/calcShipHeight';

export class ComputerGamerField extends React.Component {
  constructor() {
    super();
    this.state = {
      battleShips: [], 
      shipMatrix: Array(10).fill(Array(10).fill(0)),
    };

    this.checkingShips = [
      'fourdeck1', 'threedeck1',
      'threedeck2', 'twodeck1',
      'twodeck2', 'twodeck3', 'onedeck1',
      'onedeck2', 'onedeck3', 'onedeck4'
    ];
    this.cellsMatrix = Array(10).fill(Array(10).fill(0));
  }

  componentDidMount() {
    this.createAllShips();
  }

  createAllShips = () => {
    let battleShips = [];
    for(let ship of this.checkingShips) {
      battleShips.push(this.createShip(ship, 595, 132));
    }
    this.setState({battleShips,});
  }

  createShip = (ship, fieldLeftIndent, fieldTopIndent) => {
    let battleShip = {
      name: ship,
      left: this.calcShipPosition(fieldLeftIndent),
      top: this.calcShipPosition(fieldTopIndent),
      isVertical: this.isVertical(),
      decksNum: this.calcShipDecksNumber(ship),
    }

    battleShip.width = calcShipWidth(ship, battleShip.isVertical);
    battleShip.height = calcShipHeight(ship, battleShip.isVertical);

    return this.checkShipPosition(battleShip);
  }

  calcShipPosition = battleFieldIndent => {
    let random = Math.floor(Math.random() * 10);
    let indent = random * 33 + battleFieldIndent;
    return indent;
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

  isVertical = () => {
    let random = Math.floor(Math.random() * 10);
    if(random >= 5) {
      return true;
    }else if(random < 5) {
      return false;
    }
  }

  // check ship position methods

  checkShipPosition = ship => {
    if(this.checkIsShipBeyondField(ship) === false || this.checkIsShipsTouch(ship) === false) {
      return this.createShip(ship.name, 595, 132);
    }else {
      this.fillMatrix(ship);
      return ship;
    }
  }

  checkIsShipBeyondField = ship => {
    if(ship.left + ship.width > 330 + 595
    || ship.top + ship.height > 330 + 132) {
      //return this.createShip(ship.name, 595, 132);
      return false;
    }else {
      //this.fillMatrix(ship);
      //return ship;
      return true;
    }
  }

  checkIsShipsTouch = ship => {
    if(ship.isVertical === false) {
      return this.checkHorizontalShipTouching(ship)
    }else if(ship.isVertical === true) {
      return this.checkVerticalShipTouching(ship);
    }
  }

  checkHorizontalShipTouching = ship => {
    let rowNumber = this.positionInMatrixMass(ship.top);
    let leftIndent = ship.left;
    let i = 0;
    while(i < ship.decksNum) {
      for(let value of this.cellsMatrix[rowNumber]) {
        if(leftIndent >= 297 + 595 || value === leftIndent) {
          return false;
        }
      }
      i++;
      leftIndent += 33;
    }
    return true;
  }

  checkVerticalShipTouching = ship => {
    let rowNumber = this.positionInMatrixMass(ship.top);
    let colNumber = this.positionInMatrixSubMass(ship.left);
    let leftIndent = ship.left;
    let i = 0;
    while(i < ship.decksNum) {
      if(rowNumber > 9 || this.cellsMatrix[rowNumber][colNumber] === leftIndent) {
        return false;
      }
      i++;
      rowNumber++;
    }
    return true;
  }

  /*******/

  // filling matrix methods

  fillMatrix = ship => {
    if(ship.isVertical === false) {
      this.setHorizontalShipPositionInMatrix(ship)
    }else if(ship.isVertical === true) {
      this.setVerticalShipsPositionsInMatrix(ship);
    }
  }

  setHorizontalShipPositionInMatrix = ship => {
    let rowIndex = this.positionInMatrixMass(ship.top - 33);
    let leftIndent = this.fixLeftIndent(ship.left); // 33 - cells that make distance with other ships left side and right side
    let shipZoneWidth = ship.decksNum + 2;

    if(ship.left === 595) {
      shipZoneWidth -= 1;
    }

    let cellsMatrix = this.cellsMatrix.map((row, indexRow) => {
      if(indexRow >= rowIndex && indexRow <= rowIndex + 2) {
        let i = 0;
        row = row.map((item, indexCol) => {
          if(indexCol === this.positionInMatrixSubMass(leftIndent) && i < shipZoneWidth) {
            item = leftIndent;
            leftIndent += 33;
            i++;
            return item;
          }
          leftIndent = this.fixLeftIndent(ship.left);
          return item;
        });
      }
      return row;
    });

    this.cellsMatrix = cellsMatrix;
  }

  setVerticalShipsPositionsInMatrix = ship => {
    let leftIndent = this.fixLeftIndent(ship.left);
    let topIndent = ship.top - 33;
    let colNumber = this.positionInMatrixSubMass(leftIndent);
    let shipZoneHeight = ship.decksNum + 2;
    let shipZoneWidth;
    
    if(topIndent < 132) {
      topIndent = 132;
      shipZoneHeight -= 1;
    }

    if(ship.left === 595) {
      shipZoneWidth = 1;
    }else {
      shipZoneWidth = 2;
    }

    let i = 0;
    let cellsMatrix = this.cellsMatrix.map((row, indexRow) => {
      if(indexRow === this.positionInMatrixMass(topIndent) && i < shipZoneHeight) {
        row = row.map((item, indexColumn) => {
          if(indexColumn >= colNumber && indexColumn <= colNumber + shipZoneWidth) {
            item = leftIndent;
            leftIndent += 33;
            return item;
          }
          leftIndent = this.fixLeftIndent(ship.left);
          return item;
        });
        i++;
        topIndent += 33;
      }
      return row;
    });
    this.cellsMatrix = cellsMatrix;
  }

  positionInMatrixMass = (coordinate) => {
    let positionNumberInMass = (coordinate - 132) / 33;
    return positionNumberInMass;
  }

  positionInMatrixSubMass = (coordinate) => {
    let positionNumber = (coordinate - 595) / 33;
    return positionNumber;
  }

  fixLeftIndent = leftIndent => {
    let correctLeftIndent = leftIndent - 33;
    if(correctLeftIndent < 595) {
      correctLeftIndent = 595;
    }
    return correctLeftIndent
  }

  render() {
    let ships;
    if(this.state.battleShips.length > 0) {
      ships = this.state.battleShips.map((item, index) => {
        return (
          <div 
          className = {'ship ' + item.name + ' battleShip ' + 
          (item.isVertical ? (item.name.slice(0, -1) + 'Vertical') : '')}
          key = {index} style = {{top: item.top + 'px', left: item.left + 'px'}}>
          </div>
        )
      });
    }
    return(
      <div className   = "battleField">
        {ships}
      </div>
    );
  }
}
