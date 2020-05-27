import React from 'react';
import Menu from './start-game-components/menu';
import FieldsContainer from './start-game-components/fields-container';
import StartButton from './start-game-components/start-game-button';
import ControlButtons from './start-game-components/control-buttons';
import {connect} from 'react-redux';
import {createAllShips, randomShipsPlacement} from '../actions'

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameMode: null};
  }

  setGameMode = mode => {
    this.setState({gameMode: mode});
  }
  
  render() {
    const {
      battleShips, 
      createAllShips,
      randomShipsPlacement } = this.props;

    return (
      <div className = 'gameField'>
        {
          this.state.gameMode
          ? <FieldsContainer gameMode = {this.state.gameMode} />
          : <Menu>
              <ControlButtons 
                setGameMode = {this.setGameMode}
                createAllShips = {createAllShips}
                randomShipsPlacement = {randomShipsPlacement} />
            </Menu>
        }
        {
          battleShips.length === 10 && this.state.gameMode !== 'start'
          ? <StartButton setGameMode = {this.setGameMode} />
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({gamerState: {battleShips}}) => {
  return {battleShips}
}

export default connect(
  mapStateToProps, 
  { createAllShips,
    randomShipsPlacement })(GameField);
