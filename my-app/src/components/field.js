import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import {ComputerGamerField} from './computer-gamer/compField.js'
import {BattleField} from './battleField.js';
import {BattleShips} from './battleShips.js';
import {DotsCreator} from './dotsCreator.js'
import {CheckingShipsField} from './checkingShipsField.js';
import {CheckingShips} from './checkingShips.js';

const Field = ({
  checkingShips, 
  battleShips, 
  addShip,
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix,
  rotateShip
}) =>{
  return(
    <div className = "gameField">
      <div className = "battleFieldWrap">
        <BattleField createBattleShip = {createBattleShip}>
          <BattleShips
            battleShips          = {battleShips}
            deleteShipFromMatrix = {deleteShipFromMatrix}
            getCurrentShip       = {getCurrentShip}
            rotateShip           = {rotateShip}/>
        </BattleField>
        <ComputerGamerField/>
      </div>
      <CheckingShipsField>
        <CheckingShips checkingShips  = {checkingShips}
            getCurrentShip = {getCurrentShip}/>
      </CheckingShipsField>
      <button onClick = {() => addShip()}>show matrix</button>
    </div>
  )
}

const mapStateToProps = ({checkingShips, battleShips}) => {
  return {
    checkingShips, 
    battleShips, 
  }
}

export default connect(mapStateToProps, actions)(Field);
