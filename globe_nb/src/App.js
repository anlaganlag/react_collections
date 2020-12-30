import "./App.css";
import { useState, useEffect } from "react";
import CountryDetails from "./components/CountryDetails";
import Globe from "./components/Globe";
import BackToTopArrow from "./components/BackToTopArrow";
import { Button, Form } from "react-bootstrap";

function App() {
  const [userInput, setUserInput] = useState();
  const [country, setCountry] = useState();
  const [allCountries, setAllCountries] = useState([]);
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
          color: "red",
          value: 1000,
        },
      ],
    });
  }

  const fetchAllCountries = async () => {
    const fetchAllCountries = await fetch(
      "https://restcountries.eu/rest/v2/all"
    );
    const allCountries = await fetchAllCountries.json();
    setAllCountries(allCountries.map((country) => country.name));
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (markers.markers.length === 0) {
    setMarkers({
      markers: [
        {
          coordinates: [0, 0],
        },
      ],
    });
  }
  console.log("allCountries", allCountries);

  return (
    <div className="App">
      <div className="main-container">
        <Globe markers={markers}></Globe>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <Form.Control
              as="select"
              custom
              className="form-control mr-sm-2 w2"
              value={allCountries}
              onChange={handleChange}
            >
              <option xs>選擇國家</option>
              {allCountries.map((c) => (
                <option>{c}</option>
              ))}
            </Form.Control>
            <br/>
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
        {country ? <CountryDetails country={country}></CountryDetails> : ""}
        <BackToTopArrow></BackToTopArrow>
      </div>
    </div>
  );
}

export default App;
