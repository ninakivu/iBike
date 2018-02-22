import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar/NavBar.js'

//test API call:
axios({method: 'get', url: '/api'})
  .then((res) => { console.log(res.data) })
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to iBike</h1>
          <NavBar />
        </header>
        <p className="App-intro">
          To get started, create a profile and start biking.
        </p>

      </div>
    );
  }
}

export default App;
