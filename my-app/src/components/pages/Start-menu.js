import React from 'react';
import {connect} from 'react-redux';
import {createAllShips, randomShipsPlacement} from '../../store/actions';
import Menu from '../start-game-components/menu';
import ControlButtons from '../start-game-components/control-buttons';

const StartMenu = ({setGameMode, createAllShips, randomShipsPlacement, history}) => {
   return (
      <Menu>
         <ControlButtons 
            setGameMode = {setGameMode}
            createAllShips = {createAllShips}
            randomShipsPlacement = {randomShipsPlacement}
            />
      </Menu>
   )
}

export default connect(
      null, { createAllShips, randomShipsPlacement })
      (StartMenu);
