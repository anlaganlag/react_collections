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

  const handleChange = (e) => setUserInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInputInfo = await fetch(
      `https://restcountries.eu/rest/v2/name/${userInput}`
    );
    const data = await userInputInfo.json();
    setCountry(data[0]);
    addNewMarker(data[0]);
  };

  const addNewMarker = (country) =>
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

  return (
    <div className="App">
      <div className="main-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <Form.Control
              as="select"
              custom
              className="form-control mr-sm-2 w2"
              // value={allCountries}
              onChange={handleChange}
            >
              <option>選擇國家</option>
              {allCountries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </Form.Control>
            <Button className="btn btn-sm btn-outline-secondary" type="submit">
              查詢
            </Button>
          </form>
        </div>
        <Globe markers={markers}></Globe>

        {country ? <CountryDetails country={country}></CountryDetails> : ""}
        <BackToTopArrow/>
      </div>
    </div>
  );
}

export default App;
