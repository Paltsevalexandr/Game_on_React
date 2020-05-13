import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import BattleField from './battle-field';
import BattleShips from './battle-ships';
import StaticBattleShips from './static-battle-ships';
import Labels from '../labels/labels';

const GamerField = ({ 
  gameStart,
  battleShips, 
  labels,
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix,
  rotateShip,
  getComputerFire,
  //selectGamer,
show }) => {

  return(
    <BattleField createBattleShip = {createBattleShip}
    getComputerFire = {getComputerFire} /*selectGamer = {selectGamer}*/>
      
      {gameStart
      ? <StaticBattleShips battleShips = {battleShips}/>
      : <BattleShips
        battleShips          = {battleShips}
        deleteShipFromMatrix = {deleteShipFromMatrix}
        getCurrentShip       = {getCurrentShip}
        rotateShip           = {rotateShip}/>
      }
      <Labels labels = {labels} />
          <button onClick = {() => show()}>show</button>
    </BattleField>
  )
}

const mapStateToProps = ({gamerState: {battleShips, labels}}) => {
  return {
    battleShips, 
    labels
  }
}

export default connect(mapStateToProps, actions)(GamerField);
