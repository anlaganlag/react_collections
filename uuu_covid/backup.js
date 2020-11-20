const WORLDPOSITION = {
    lat: 30,
    lng: 0,
};

const [mapCenter, setMapCenter] = useState(WORLDPOSITION);
const [mapZoom, setMapZoom] = useState(2.4);

console.log("InfoInfoInfoInfoInfo",countryInfo)

await fetch(url)
.then((response) => response.json())
.then((data) => {
  setInputCountry(countryCode);
  setCountryInfo(data);
  countryCode === "worldwide"
  ? setMapCenter([WORLDPOSITION.lat,WORLDPOSITION.lng])
  : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);

  countryCode === "worldwide"
  ? setMapZoom(2.4)
  : setMapZoom(5)
  
});
};