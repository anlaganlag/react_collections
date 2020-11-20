import React from 'react';
// Helpers
import { formatTemperature } from '../helpers';
// Styles
import { Wrapper, Date, Temp, Wind } from './WeatherData.styles';

const WeatherData = ({ sol, isMetric }) => (
  <Wrapper>
    <Date>
      <h2>{sol.sol}</h2>
      <p>{sol.date}</p>
    </Date>

    <Temp>
      <h2 className='section-title'>溫度</h2>
      <p className='reading'>
        最高:
        <span> {isMetric ? ' 攝氏' : ' 華氏'}</span>
        <span> {formatTemperature(sol.maxTemp, isMetric)}</span>°
      </p>
      <p className='reading'>
        最低:
        <span> {isMetric ? ' 攝氏' : ' 華氏'}</span>
        <span> {formatTemperature(sol.minTemp, isMetric)}</span>°
      </p>
    </Temp>

    <Wind deg={sol.windDirectionDegrees}>
      <h2 className='section-title'>風速</h2>
      <p className='reading'>
        <span>{sol.windSpeed}</span>
        <span>{isMetric ? ' km/h' : ' mile/h'}</span>
      </p>

      <div className='wind__direction'>
        <div className='wind__arrow'></div>
      </div>
    </Wind>
  </Wrapper>
);

export default WeatherData;
