import React from 'react';

import {randomShipsPlacement} from '../actions'
import ComputerField from './computer-components/computer-field';
import GamerField from './gamer-components/gamer-field';
import Menu from './start-game-components/menu';
import MenuContainer from './start-game-components/menu-container';
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
      <div className = 'gameField'>
          <GamerField/>  
          {
            this.state.gameStart 
            ? <ComputerField/>
            : <MenuContainer 
                checkingShips     = {checkingShips}
                startPlay         = {this.startPlay}
                showCheckingShips = {this.state.showCheckingShips}>

                <Menu
                  gameStart            = {this.state.gameStart} 
                  startPlay            = {this.startPlay} 
                  showCheckingShips    = {this.showCheckingShips} 
                  randomShipsPlacement = {randomShipsPlacement}/>
              </MenuContainer>
          }
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
