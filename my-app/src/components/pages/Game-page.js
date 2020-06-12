import React from 'react';
import {connect} from 'react-redux';

import FieldsContainer from '../start-game-components/fields-container';
import StartButton from '../start-game-components/start-game-button';
import Priority from '../start-game-components/priority';

const GamePage = ({gameMode, gamer, setGameMode, battleShips}) => {
   return (
      <>
         { 
            gameMode === 'start' 
            ? <Priority gamer = {gamer} /> 
            : <div className = 'priority'></div>
         }

         <FieldsContainer gameMode = {gameMode} />

         {
          battleShips.length === 10 && gameMode !== 'start'
          ? <StartButton setGameMode = {setGameMode} />
          : null
         }
      </>
   )
}

const mapStateToProps = ({gamerState: {battleShips}, gameplayState: {gamer}}) => {
   return {battleShips, gamer}
}
 
export default connect(mapStateToProps)(GamePage);
