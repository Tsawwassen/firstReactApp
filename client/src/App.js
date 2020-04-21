import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customers from './components/customers/customers';
import  './App.css';
import AppNavbar from './components/appnavbar/appnavbar';
import Employee from './components/employee/employee';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
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
