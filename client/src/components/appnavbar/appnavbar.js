import React, { Component } from 'react';
import './appnavbar.css';
import {Navbar, Nav} from 'react-bootstrap';



class AppNavbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }

  }

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">ReactApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/customer">Customer</Nav.Link>
            <Nav.Link href="/employee">Employee</Nav.Link>
            <Nav.Link href="/csv">CSV</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;