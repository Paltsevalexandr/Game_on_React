import React from 'react';
import ReactDOM from 'react-dom';
import {Field} from './components/field.js'
import './index.css';
import './styles/ship.css';
import './styles/dots.css';

function App() {
  return (
    <Field/>
  );
}
ReactDOM.render(
  <App />, document.querySelector('#root')
);