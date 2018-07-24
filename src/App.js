import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/Login/Login'
import HomePage from './components/Homepage/Homepage'
class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  setLoggedIn = (status) => {
    console.log("called");
    this.setState({
      loggedIn: status
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.loggedIn === true ? <HomePage setLoggedIn={this.setLoggedIn} /> : <LoginPage setLoggedIn={this.setLoggedIn} /> }

      </div>
    );
  }
}

export default App;
