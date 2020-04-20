import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      
    }

  }



  render () {
    return (
      <div>
        <header className="App-header">
        Navbar
        <a href="">Customer</a>
        <a href="">Employee</a>
      </header>
      </div>
    );
  }
}

export default Navbar;