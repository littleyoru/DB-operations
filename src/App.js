import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
        </header>
        <div>
          <li key='Name'>
            <label></label>
            <input></input>
          </li>
          <li key='Age'>
            <label></label>
            <input></input>
          </li>
          <li key='City'>
            <label></label>
            <input></input>
          </li>
        </div>
      </div>
    );
  }
}

export default App;
