import React from 'react';
import Customers from './components/customers/customers';
import  './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Customers />
    </div>
  );
}

export default App;
