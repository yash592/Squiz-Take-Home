import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { faCoffee, faSort } from '@fortawesome/free-solid-svg-icons'
import { sortDataByEmployeeNumber, sortDataByName } from './utils/sort.js'
import './App.css';
import React, { useState, useEffect } from 'react';
const SQUIZ_URL = 'https://dujour.squiz.cloud/developer-challenge/data';




function App() {

  const [data, setData] = useState([])
  const [country, setCountry] = useState('')
  const [searchField, setSearchField] = useState('');
  const [searchCategory, setSearchCategory] = useState('country');
  const [order, setOrder] = useState(true)
  const [filteredData, setFilteredData] = useState(data)


  useEffect(() => {
    fetch(SQUIZ_URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const filteredData = data.filter((clients) => {
      console.log(clients.country.toLowerCase())
      if (searchCategory === 'country') {
        return clients.country.toLowerCase().includes(searchField);
      } else {
        return clients.industry.toLowerCase().includes(searchField);
      }
    })
    setFilteredData(filteredData)
  }, [data, searchField])

  const handleChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  const dropdownChange = (event) => {
    const category = event.target.value;
    setSearchCategory(category);
  }

  const sortByParameter = (data, sortBy) => {
    let sortOrder = '';
    setOrder(!order);

    order ? sortOrder = 'asc' : sortOrder = 'desc'
    let sortedEmployees = (sortBy === 'employeecount') ? sortDataByEmployeeNumber(data, sortOrder) : sortDataByName(data, sortOrder);
    setData(sortedEmployees)
  }


  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <input
            className='search-box'
            type='search'
            placeholder='Search'
            onChange={handleChange}
          />
          <select name='search term' onChange={dropdownChange}>
            <option value='country'>Country</option>
            <option value='industry'>Industry</option>
          </select>
        </Col>
        <Col md={10}>
          <div className="container">
            <table className='table'>
              <thead>
                <tr>
                  <th onClick={() => sortByParameter(data, 'company')}>
                    <span style={{ paddingRight: 20 }}>
                      <FontAwesomeIcon icon={faSort} />
                    </span>
                    Company
                  </th>
                  <th>Country</th>
                  <th>
                    Industry
                  </th>

                  <th onClick={() => sortByParameter(data, 'employeecount')}>
                    <span style={{ paddingRight: 20 }}>
                      <FontAwesomeIcon icon={faSort} />
                    </span>
                    # of Employees
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(name =>
                  <tr>
                    <td>{name.name}</td>
                    <td>{name.country}</td>
                    <td>{name.industry}</td>
                    <td>{name.numberOfEmployees}</td>
                  </tr >
                )}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
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