import React from 'react';
import {calcShipWidth} from '../positionFunctions/calcShipWidth.js';
import {calcShipHeight} from '../positionFunctions/calcShipHeight';

export class ComputerGamerField extends React.Component {
  constructor() {
    super();
    this.state = {checkingShips: ['fourdeck1',
    'threedeck1', 'threedeck2', 'twodeck1',
    'twodeck2', 'twodeck3', 'onedeck1',
    'onedeck2', 'onedeck3', 'onedeck4'],
    battleShips: [],
    cellsMatrix: Array(10).fill(Array(10).fill(0))};
  }

  componentDidMount() {
    this.createAllShips();
  }

  createAllShips = () => {
    let battleShips = [];
    for(let ship of this.state.checkingShips) {
      battleShips.push(this.createShip(ship));
    }
    this.setState({battleShips,}, () => console.log(this.state.battleShips));
  }

  createShip = (ship) => {
    let battleShip = {
      name: ship,
      width: calcShipWidth(ship),
      height: calcShipHeight(ship),
      leftIndent: this.calcShipPosition(595),
      topIndent: this.calcShipPosition(132),
      isVertical: this.isVertical(),
    }
    this.fillMatrix(battleShip);
    return battleShip;
  }

  calcShipPosition = (battleFieldIndent) => {
    let random = Math.floor(Math.random() * 10);
    let indent = random * 33 + battleFieldIndent;

    return indent;
  }

  isVertical = () => {
    let random = Math.floor(Math.random() * 10);
    if(random >= 5) {
      return true;
    }else if(random < 5) {
      return false;
    }
  }

  // fill matrix methods

  fillMatrix = (ship) => {
    if(ship.isVertical === false) {
      this.setHorizontalShipsPositionsInMatrix(ship)
    }else if(ship.isVertical === true) {
      this.setVerticalShipsPositionsInMatrix(ship);
      return;
    }
  }

  setHorizontalShipsPositionsInMatrix = ship => {
    let rowIndex = this.deckPositionInMatrixMass(ship.topIndent);
    let leftIndent = ship.leftIndent;
    let decksNumber = this.shipDecksNumber(ship);

    this.setState(state => {
      let cellsMatrix = state.cellsMatrix.map((matrixRow, indexRow) => {
        if(indexRow === rowIndex) {
          let i = 0;
          matrixRow = matrixRow.map((column, indexColumn) => {
            if(indexColumn === this.deckPositionInMatrixSubMass(leftIndent) && i < decksNumber) {
              column = leftIndent;
              leftIndent += 33;
              i++;
              return column;
            }
            return column;
          });
        }
        return matrixRow;
      });
      return {cellsMatrix,};
    });
  }

  setVerticalShipsPositionsInMatrix = ship => {
    let colNumber = this.deckPositionInMatrixSubMass(ship.leftIndent);
    let topIndent = ship.topIndent;
    let decksNumber = this.shipDecksNumber(ship);

    this.setState(state => {
      let i = 0;
      let cellsMatrix = state.cellsMatrix.map((matrixRow, indexRow) => {
        if(indexRow === this.deckPositionInMatrixMass(topIndent) && i < decksNumber) {
          matrixRow = matrixRow.map((item, indexColumn) => {
            if(indexColumn === colNumber) {
              item = topIndent;
              topIndent += 33;
              i++;
              return item;
            }
            return item;
          });
        }
        return matrixRow;
      });
      return {cellsMatrix,};
    }, ()=>console.log(this.state.cellsMatrix));
  }

  deckPositionInMatrixMass = (coordinate) => {
    let positionNumberInMass = (coordinate - 132) / 33;
    return positionNumberInMass;
  }

  deckPositionInMatrixSubMass = (coordinate) => {
    let positionNumber = (coordinate - 595) / 33;
    return positionNumber;
  }

  shipDecksNumber = (ship) => {
    if(ship.name.slice(0, -1) === 'fourdeck') {
      return 4;
    }else if(ship.name.slice(0, -1) === 'threedeck') {
      return 3;
    }else if(ship.name.slice(0, -1) === 'twodeck') {
      return 2;
    }else if(ship.name.slice(0, -1) === 'onedeck') {
      return 1;
    }
  }
  //
  render() {
    let ships;
    if(this.state.battleShips.length === 10) {
      ships = this.state.battleShips.map((item, index) => {
        return (
          <div 
          className = {'ship ' + item.name + ' battleShip ' + 
          (item.isVertical ? (item.name.slice(0, -1) + 'Vertical') : '')}
          key = {index} style = {{top: item.topIndent + 'px', left: item.leftIndent + 'px'}}>
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