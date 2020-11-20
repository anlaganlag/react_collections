import React, { useState, useEffect } from 'react';
// Helpers
import { formatDate } from './helpers';
// API
import { API_URL } from './api';
// Components
import WeatherData from './components/WeatherData';
import Info from './components/Info';
import Unit from './components/Unit';
import Previous from './components/Previous';
// Img
import BGImage from './img/mars.jpg';
// Styles
import {
  AppWrapper,
  GlobalStyle,
  MarsWeather,
  InfoWrapper,
} from './App.styles';

const App = () => {
  //載入狀態
  const [loading, setLoading] = useState(true);
  //所有的天氣數據
  const [weather, setWeather] = useState([]);
  //火星日
  const [selectedSol, setSelectedSol] = useState();
  //是否使用公制
  const [metric, setMetric] = useState(true);
  //前幾日狀態是否打開..
  const [previous, setPrevious] = useState(false);
  console.log(weather);



  //
  useEffect(() => {
    const fetchFromAPI = async () => {
      const weather = await (await fetch(API_URL)).json();
      const marsWeather = weather?.sol_keys?.map((solKey) => {
        return {
          sol: solKey,
          maxTemp: weather[solKey].AT?.mx || '無數據',
          minTemp: weather[solKey].AT?.mn || '無數據',
          windSpeed: Math.round(weather[solKey].HWS?.av || 0),
          windDirectionDegrees:
            weather[solKey].WD?.most_common?.compass_degrees || 0,
          date: formatDate(new Date(weather[solKey].First_UTC)),
        };
      });
      setWeather(marsWeather);
      setSelectedSol(marsWeather.length - 1);
      setLoading(false);
    };

    fetchFromAPI();
  }, []);

  return (
    <>
      <GlobalStyle bgImage={BGImage} />
      <AppWrapper>
        <MarsWeather>
          {loading ? (
            <div>載入中 ...</div>
          ) : (
            <>
              <h1 className='main-title'>
                火星平原最新天氣
              </h1>
              <WeatherData sol={weather[selectedSol]} isMetric={metric} />
              <InfoWrapper>
                <Info />
                <Unit metric={metric} setMetric={setMetric} />
              </InfoWrapper>
            </>
          )}
        </MarsWeather>
        <Previous
          weather={weather}
          previous={previous}
          setPrevious={setPrevious}
          setSelectedSol={setSelectedSol}
          isMetric={metric}
        />
      </AppWrapper>
    </>
  );
};

export default App;
