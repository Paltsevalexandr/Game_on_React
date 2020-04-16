import React from 'react';
import {BattleField} from './battleField.js';
import {BattleShips} from './battleShips.js';
import {DotsCreator} from './dotsCreator.js'
import {CheckingShipsField} from './checkingShipsField.js';
import {CheckingShips} from './checkingShips.js';

export class Field extends React.Component {
  constructor() {
    super();
    this.state = {
        currentShip: {},
        pageX: '',
        pageY: '',
    };
    // height and width of cells = 33px
  }
  // Dots methods

  getDotCoordinates = e => {
    this.setState({pageX: e.nativeEvent.pageX, pageY: e.nativeEvent.pageY});
  }

  render() {
    return(
      <div className = "gameField">
        <div className = "battleFieldWrap">
          <BattleField
            currentShipName    = {this.state.currentShip.name}
            battleShips        = {this.state.battleShips}
            canPlaceShip       = {this.state.canPlaceShip}
            addShip            = {this.addShip}
            deleteSelectedShip = {this.deleteSelectedShip}
            moveBattleShip     = {this.moveBattleShip}
            getDotCoordinates  = {this.getDotCoordinates}>

              <BattleShips
                battleShips         = {this.state.battleShips}
                canPlaceShip        = {this.state.canPlaceShip}
                createCurrentShip   = {this.createCurrentShip}
                rotateShip          = {this.rotateShip}
                foundForbiddenCells = {this.foundForbiddenCells}
              />

              <DotsCreator
                pageX = {this.state.pageX}
                pageY = {this.state.pageY}
              />

          </BattleField>
          <BattleField
            battleShips = {[]}
          />
        </div>

        <CheckingShipsField>
          <CheckingShips
            checkingShips       = {this.state.checkingShips}
            canPlaceShip        = {this.state.canPlaceShip}
            createCurrentShip   = {this.createCurrentShip}
            foundForbiddenCells = {this.foundForbiddenCells}
          />
        </CheckingShipsField>
        <div style = {{color: this.state.canPlaceShip ? 'black' : 'red'}}>{this.state.canPlaceShip ? 'cool' : 'BAD!!!'}</div>
      </div>
    )
  }
}
