import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [customer, setCustomer] = useState([])
  const [country, setCountry] = useState('')
  // const [industry, setIndustry] = useState['']
  console.log(customer)

  useEffect(() => {
    fetch('https://dujour.squiz.cloud/developer-challenge/data')
      .then(response => response.json())
      .then(data => setCustomer(data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {customer.map(name =>
            <li>{name.name}</li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
