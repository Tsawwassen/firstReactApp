import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers: [],
      nameValue: "",
      idValue: 0
    }

    //Function binding (Note, must be in the constructor)
    this.addUser = this.addUser.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
 
  }

  handleNameChange(event){
    this.setState({nameValue: event.target.value});
  }

  addUser(event){
    //Store the user that will be added
    var userToAdd = {id: this.state.customers.length + 1, firstname: this.state.nameValue};

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
    //Prevents the page from refreshing
    event.preventDefault();
  }


  componentDidMount(){
    fetch('/api/customers/all')
      .then(res => res.json())
      .then(customers => this.setState({customers}));
  }


  render () {
    return (
      <div>
        <h2>Customers hello</h2>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>{customer.name}</li>)}
        </ul>
        <form onSubmit={this.addUser}>
          <label>
            Name:
            <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Customers;
