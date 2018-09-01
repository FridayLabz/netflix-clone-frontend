import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import UpdateAccount from "./pages/AccountRead/accountRead";
import Register from "./pages/Register/Register";
import ReadMovie from "./pages/Movie/ReadMovie";
class App extends Component {
  render() {
    return (
      <div>
        <ReadMovie/>
      </div>
    );
  }
}

export default App;
