import React from 'react';
import ReactDOM from 'react-dom';
import {Field} from './components/field.js'
import './index.css';
import './styles/ship.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
    <Field/>
    );
  }
}
ReactDOM.render(
  <App />, document.querySelector('#root')
);