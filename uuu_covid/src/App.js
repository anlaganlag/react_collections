import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

const WORLDPOSITION = {
  lat: 0,
  lng: 0,
};
const ZOOMSCALE = 2;

const App = () => {
  //code string worldwide CN
  const [country, setInputCountry] = useState("worldwide");
  //obj
  const [countryInfo, setCountryInfo] = useState({});
  //[obj-]
  const [countries, setCountries] = useState([]);
  //[obj_all]
  const [mapCountries, setMapCountries] = useState([]);
  //[obj_-revise]
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  const [mapCenter, setMapCenter] = useState(WORLDPOSITION);
  const [mapZoom, setMapZoom] = useState(ZOOMSCALE);

  //开始获取的全球的信息,只执行一次..
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  //获取国家列表的信息[{},{},{}]

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        let sortedData = sortData(data);
        setCountries(countries);
        setMapCountries(data);
        setTableData(sortedData);
      });
  }, []);

  //   getCountriesData();
  // }, []);
  function hanldeMapZoom(e) {
    setMapZoom(e.target.value);
  }


  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode); //下拉框改变
        setCountryInfo(data); //更新全球或者特定国家的info...
        countryCode === "worldwide"
          ? setMapCenter([WORLDPOSITION.lat, WORLDPOSITION.lng])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(mapZoom);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
          hanldeMapZoom={hanldeMapZoom}
        />
      </div>
      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>LIVE <strong> {casesType} </strong> by Country(Region)</h3> 
            <Table countries={tableData} casesType={casesType}/>
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
