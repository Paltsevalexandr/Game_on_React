import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import {BattleField} from './battleField.js';
import {BattleShips} from './battleShips.js';

const GamerField = ({ 
  battleShips, 
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix,
  rotateShip,
show }) => {

  return(
    <BattleField createBattleShip = {createBattleShip}>
      
      <BattleShips
          battleShips          = {battleShips}
          deleteShipFromMatrix = {deleteShipFromMatrix}
          getCurrentShip       = {getCurrentShip}
          rotateShip           = {rotateShip}/>
          <button onClick = {() => show()}>show</button>
    </BattleField>
  )
}

const mapStateToProps = ({gamerState: {battleShips}}) => {
  return {
    battleShips, 
  }
}

export default connect(mapStateToProps, actions)(GamerField);
