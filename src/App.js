import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

class App extends Component {


  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </head>


        <header className="App-header">
        <Navbar />
        <Home></Home>
        </header>
      </div>
    );
  }
}

export default App;
