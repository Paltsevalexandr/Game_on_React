import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
const StartMenu = lazy(() => import ('./pages/Start-menu'));
const GamePage = lazy(() => import('./pages/Game-page'));

class GameField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameMode: null};
  }

  setGameMode = mode => {
    this.setState({gameMode: mode});
  }

  renderGamePage() {
    if(this.state.gameMode) {
      return (
        <Suspense fallback = {<div>loading...</div>}>
          <GamePage gameMode = {this.state.gameMode} 
                    setGameMode = {this.setGameMode} />
        </Suspense>
      );
    }  
    return <Redirect to = '/' />
  }
  
  render() {
    return (
      <div className = 'gameField'>
          <Switch>
            <Route path = '/' exact
              render = {() => {
                return (
                  <Suspense fallback = {<div>loading...</div>}>
                    <StartMenu setGameMode = {this.setGameMode} />
                  </Suspense>
                ); }} />
            <Route path = '/game-field' 
              render = {() => this.renderGamePage()} />
          </Switch>        
      </div>
    )
  }
}

export default GameField;
