import React, { Component } from 'react';
import logo from './OnTrak_blue.png';
import loginImg from './chi.jpg';
import './App.css';

class App extends Component {

  render() {
    return (
    
      <div className="App" id="app-div">
        <img src={loginImg} className="loginImage" />
        <div className="loginForm">
          <img src={logo} className="logo" />
          <form>
            <div className="formGroup">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>

            <div class="formGroup">
              <input type="pass" name="pass" id="pass" placeholder="Password" required />
            </div>

            <div className="formSubmit">
              <input type="submit" value="Login" class="submit" name="submit" id="submit" />
            </div>
          </form>
        </div>
          {/*
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          */}
        
      </div>
    
    );
  }
}

export default App;