import './App.css';
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';
import Globe from './components/Globe';
import BackToTopArrow from './components/BackToTopArrow';
import { Button } from 'react-bootstrap';

function App() {
  const [userInput, setUserInput] = useState();
  const [country, setCountry] = useState();
  const [markers, setMarkers] = useState({ markers: [] });
  console.log(markers);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://restcountries.eu/rest/v2/name/${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        addNewMarker(data[0]);
      });
  }

  function addNewMarker(country) {
    setMarkers({
      markers: [
        {
          id: country.alpha2Code,
          name: country.name,
          coordinates: country.latlng,
          color: 'red',
          value: 40,
        },
      ],
    });
  }

  if (markers.markers.length === 0) {
    setMarkers({
      markers: [
        {
          coordinates: [0, 0],
        },
      ],
    });
  }

  return (
    <div className="App">
      <div className="main-container">
        <Globe markers={markers}></Globe>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Enter country name or code"
              aria-label="Search"
              name="country"
              value={userInput}
              onChange={handleChange}
            />
            <Button className="btn btn-sm btn-outline-secondary" type="submit">
              Search
            </Button>
          </form>
        </div>
        {country ? <CountryDetails country={country}></CountryDetails> : ''}
        <BackToTopArrow></BackToTopArrow>
      </div>
    </div>
  );
}

export default App;
