import React from 'react';
import * as actions from '../actions'
import ComputerFieldContainer from './computer-components/computer-field-container';
import GamerField from './gamer-components/gamer-field';
import Menu from './start-game-components/menu';
import MenuContainer from './start-game-components/menu-container';
import {connect} from 'react-redux';

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameStart: false, showCheckingShips: false};
  }

  startPlay = () => {
    this.setState({gameStart: true});
  }

  showCheckingShips = () => {
    this.setState({showCheckingShips: true});
  }
  
  render() {
    const {checkingShips, randomShipsPlacement, createAllShips} = this.props;

    return (
      <div className = 'gameField'>
          <GamerField/>  
          {
            this.state.gameStart 
            ? <ComputerFieldContainer/>
            : <MenuContainer 
                checkingShips     = {checkingShips}
                startPlay         = {this.startPlay}
                showCheckingShips = {this.state.showCheckingShips}
                createAllShips    = {createAllShips}>

                <Menu
                  gameStart            = {this.state.gameStart} 
                  startPlay            = {this.startPlay} 
                  showCheckingShips    = {this.showCheckingShips} 
                  randomShipsPlacement = {randomShipsPlacement}
                  createAllShips    = {createAllShips}/>
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

export default connect(mapStateToProps, actions)(GameField);
