import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import GameField from './components/game-field';

import reducer from './reducer/reducer';
import './index.css';
import './styles/ship.css';
import './styles/labels.css';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store = {store}>
      <GameField/>
    </Provider>
  );
}
ReactDOM.render(
  <App />, document.querySelector('#root')
);
