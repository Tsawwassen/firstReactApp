import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

  constructor(){
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers},() =>  console.log("Customers Fetched", customers)));
  }


  render () {
    return (
      <div>
        <h2>Customers hello</h2>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.firstname}</li>)}
        </ul>
      </div>
    );
  }
}

export default Customers;
