import React from 'react';

import {randomShipsPlacement} from '../actions'
import ComputerField from './computer-components/computer-field';
import GamerField from './gamer-components/gamer-field';
import StartGame from './start-game-components/start-game-field';
import ControlButtons from './start-game-components/control-buttons';
import {connect} from 'react-redux';

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameStart: false, message: '', showCheckingShips: false};
  }

  startPlay = () => {
    this.setState({gameStart: true});
  }

  showCheckingShips = () => {
    this.setState({showCheckingShips: true});
  }

  render() {
    const {checkingShips, randomShipsPlacement} = this.props;

    return (
      <div className = 'gameContainer'>
        {
          this.state.gameStart
          ? <div className = 'header'></div>
          : <h1>Расстановка кораблей</h1>
        }
        <div className = 'gameField'>
          <GamerField/>  
          {
            this.state.gameStart 
            ? <ComputerField/>
            : <StartGame 
                checkingShips = {checkingShips}
                startPlay = {this.startPlay}
                showCheckingShips = {this.state.showCheckingShips}>

                <ControlButtons 
                  startPlay = {this.startPlay}
                  showCheckingShips = {this.showCheckingShips}
                  randomShipsPlacement = {randomShipsPlacement} />
              </StartGame>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({gamerState: {checkingShips}}) => {
  return {
    checkingShips
  }
}

export default connect(mapStateToProps, {randomShipsPlacement})(GameField);
