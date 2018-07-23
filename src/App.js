import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/Login'
import HomePage from './components/Homepage'
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
      {this.state.loggedIn === true ? <HomePage/> : <LoginPage setLoggedIn={this.setLoggedIn} /> }

      </div>
    );
  }
}

export default App;
