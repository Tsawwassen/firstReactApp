import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

  constructor(){
    super();
    this.state = {
      customers: []
    }

    //Function binding (Note, must be in the constructor)
    this.addUser = this.addUser.bind(this);
  }

  addUser(){
    //Store the user that will be added
    var userToAdd = {id: 4, firstname: "test add4"};

    //Get current array of cusomers when the addUser function is called
    var currentCustomers = this.state.customers;

    //Request option that will be sent to backend server
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userToAdd)
    };
    
    fetch('/api/customers', requestOptions)
        .then(response => response.json())
        .then(data => {
          //Should do some error checking here to know it was added

          //Push the new user object to the customers array
          currentCustomers.push(userToAdd);

          //Update customers in the state so that the DOM will re-render the list
          this.setState({currentCustomers});
        });
        
  }

  componentDidMount(){
    fetch('/api/customers/all')
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
        <button onClick={this.addUser}>
          Button Text
        </button>
      </div>
    );
  }
}

export default Customers;
