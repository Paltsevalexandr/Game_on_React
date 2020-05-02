import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Field from './components/field.js';

import reducer from './reducer/reducer';
import './index.css';
import './styles/ship.css';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store = {store}>
      <Field/>
    </Provider>
  );
}
ReactDOM.render(
  <App />, document.querySelector('#root')
);