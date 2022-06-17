import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
const SQUIZ_URL = 'https://dujour.squiz.cloud/developer-challenge/data'

function App() {

  const [data, setData] = useState([])
  const [country, setCountry] = useState('')
  const [searchField, setSearchField] = useState('');
  // const [industry, setIndustry] = useState['']

  console.log('data', data)


  useEffect(() => {
    fetch(SQUIZ_URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])


  const handleChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    console.log(searchString)
    setSearchField(searchString);

  }

  const filteredData = data.filter((clients) => {
    return clients.name.toLocaleLowerCase().includes(searchField);
    setData(filteredData);
    console.log(data)
  })


  return (
    <div className="App">
      <header className="App-header">

        <input
          className='search-box'
          type='search'
          placeholder='Search By Country'
          onChange={handleChange}
        />
        <input
          className='search-box-industry'
          type='search'
          placeholder='Search By Industry'
          onChange={handleChange}
        />
        <ul>
          {filteredData.map(name =>
            <li>{name.name}</li>
          )}
        </ul>
      </header>

    </div>
  );
}

export default App;


// • Retrieve data from https://dujour.squiz.cloud/developer-challenge/data 
// 	• Display the retrieved data as a list
// 	• Enable filtering by "country" and "industry" values; Changing filters should not reset sort order selection
// 	• Enable ascending and descending sorting by "name" or "numberOfEmployees" values; Changing the sort order
//    should not reset filters selection
// 	• On desktop, use a two column layout, showing filters and sort options on the left hand side and the list of 
//   items on the right
// 	• On mobile, use a single column, stacked layout, with filters and sort options above the list of items
// 	• CSS and JavaScript should be bundled and minified. You should use a CSS preprocessor. 
//   You can choose between building the application in regular HTML or React with JSX. You may use libraries, 
//   but should avoid using jQuery