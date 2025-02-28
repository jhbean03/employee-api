import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './home/home'
import Details from './details/details'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Details path="/employees/:employeeId" />
        <Details path="/employees" />
      </Router>
    </div>
  );
}

export default App;
