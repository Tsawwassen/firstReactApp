import React, { Component } from 'react';
import './navbar.css';

import {
  Link
} from "react-router-dom";


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
        <Link to="/customer">Customer</Link>
        <Link to="/employee">Employee</Link>
      </header>
      </div>
    );
  }
}

export default Navbar;