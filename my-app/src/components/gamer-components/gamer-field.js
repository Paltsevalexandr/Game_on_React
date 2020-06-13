import React from 'react';
import {connect} from 'react-redux';
import {
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix,
  rotateShip } from '../../store/actions';

import BattleField from './battle-field';
import BattleShips from './battle-ships';
import StaticBattleShips from './static-battle-ships';
import Labels from '../labels/labels';

const GamerField = ({ 
  gameMode,
  battleShips, 
  labels,
  getCurrentShip,
  createBattleShip,
  deleteShipFromMatrix,
  rotateShip }) => {

  return(
    <BattleField createBattleShip = {createBattleShip}>
      {
        gameMode === 'start'
        ? <StaticBattleShips battleShips = {battleShips}/>
        : <BattleShips
          battleShips          = {battleShips}
          deleteShipFromMatrix = {deleteShipFromMatrix}
          getCurrentShip       = {getCurrentShip}
          rotateShip           = {rotateShip}/>
      }
      <Labels labels = {labels} />
    </BattleField>
  )
}

const mapStateToProps = ({gamerState: {battleShips, labels}}) => {
  return {
    battleShips, 
    labels
  }
}

export default connect(
  mapStateToProps, 
    {
      getCurrentShip,
      createBattleShip,
      deleteShipFromMatrix,
      rotateShip
    }
  )(GamerField);
