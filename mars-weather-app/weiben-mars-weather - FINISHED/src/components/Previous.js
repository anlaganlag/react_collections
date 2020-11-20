import React from 'react';
// Styles
import {
  PreviousWrapper,
  Toggle,
  PreviousDays,
  PreviousDay,
} from './Previous.styles';

const Previous = ({
  weather,
  previous,
  setPrevious,
  setSelectedSol,
  isMetric,
}) => (
  <PreviousWrapper previous={previous}>
    <Toggle
      htmlFor='weather-toggle'
      onClick={() => setPrevious((prev) => !prev)}
      previous={previous}
    >
      <span>&#8593;</span>
      <span className='sr-only'>過去的天氣數據</span>
    </Toggle>

    <h2 className='main-title previous-weather__title'>過去一周天氣</h2>
    <PreviousDays>
      {weather.map((sol, i) => (
        <PreviousDay key={sol.sol} previous={previous}>
          <h3 className='previous-day__sol'>
            <span>{sol.sol}</span>
          </h3>
          <p className='previous-day__date'>{sol.date}</p>
            {
              sol.maxTemp!=="無數據" ?
              <div>
          <p className='previous-day__temp'>
              最高:

            <span>{sol.maxTemp}°</span>
            <span>{isMetric ? ' C' : ' F'}</span>
          </p>
          <p className='previous-day__temp'>
            最低:
            <span>{sol.minTemp}°</span>
            <span>{isMetric ? ' C' : ' F'}</span>
          </p>
            </div>
            :<p>
              無相關數據
            </p>
            }
          <button
            className='previous-day__more-info'
            onClick={() => setSelectedSol(i)}
          >
            更多
          </button>
        </PreviousDay>
      ))}
    </PreviousDays>
  </PreviousWrapper>
);

export default Previous;
