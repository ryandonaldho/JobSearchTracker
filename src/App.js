import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/Login/Login';
import HomePage from './components/Homepage/Homepage';
import { Route, Link, Redirect, } from 'react-router-dom';
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
        return(
        <div className="background container-fluid">
        <Route
        exact path="/"
         render={(props) => <LoginPage setLoggedIn={this.setLoggedIn} loggedIn={this.state.loggedIn} />}
         />
        <Route 
         path="/home"
         render={(props) => <HomePage setLoggedIn={this.setLoggedIn} loggedIn={this.state.loggedIn}  />}
         />
         </div>
         );
          // return (
          //   <div className="row justify-content-center">
          //     {this.state.loggedIn === true ? <HomePage setLoggedIn={this.setLoggedIn} /> : <LoginPage setLoggedIn={this.setLoggedIn} /> }
          //    </div>
          // );
  }
}

export default App;
