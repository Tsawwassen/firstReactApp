import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customers from './components/customers/customers';
import  './App.css';
import Navbar from './components/navbar/navbar';
import Employee from './components/employee/employee';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/customer">
            <Customers />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
