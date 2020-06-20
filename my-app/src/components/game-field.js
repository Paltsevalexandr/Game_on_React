import React, {lazy, Suspense, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const StartMenu = lazy(() => import ('./pages/Start-menu'));
const GamePage = lazy(() => import('./pages/Game-page'));

const GameField = ({winner}) => {

  let [gameMode, setGameMode] = useState(null);
  
  const setMode = mode => {
    setGameMode(gameMode = mode);
  }

  const renderGamePage = () => {
    if(gameMode) {
      return (
        <Suspense fallback = {<div>loading...</div>}>
          <GamePage gameMode = {gameMode} 
                    setGameMode = {setMode} />
        </Suspense>
      );
    }  
    return <Redirect to = '/' />
  }
  
  return (
    <div className = 'gameField'>
        <Switch>
          <Route path = '/' exact
            render = {() => <Suspense fallback = {<div>loading...</div>}>
                              <StartMenu setGameMode = {setGameMode} />
                            </Suspense> } />

          <Route path = '/game-field' 
            render = {() => renderGamePage()} />
          <Redirect to = '/' />
        </Switch>        
    </div>
  )
}

export default GameField;
