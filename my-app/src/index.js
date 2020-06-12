import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import GameField from './components/game-field';

import './index.css';
import './assets/styles/ship.css';
import './assets/styles/labels.css';
import './assets/styles/game-start-field.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Provider store = {store}>
      <Router>
        <GameField/>
      </Router>
    </Provider>
  );
}
ReactDOM.render(
  <App />, document.querySelector('#root')
);
