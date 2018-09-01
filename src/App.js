import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import UpdateAccount from "./pages/AccountRead/accountRead";
import Register from "./pages/Register/Register";

class App extends Component {
  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default App;
