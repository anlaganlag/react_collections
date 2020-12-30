import React from 'react';

function Country({ country }) {
  return (
    <>
      <div className="details-container">
        <div className="general-details sub-containers">
          <div className="title">
            <h4> 國家信息</h4>
          </div>
          <div className="general-details-split split">
            <div>
              <p>國名: {country.name}</p>
              <p>首府: {country.capital}</p>
              <img src={country.flag} alt="country-flag"></img>
              <p>
                 代碼: {country.alpha2Code} 或 {country.alpha3Code}
              </p>
            </div>
            <div>
              <p>鄰國: </p>
              {country.borders.map((border) => (
                <p>{border}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="economic-details sub-containers">
          <div className="title">
            <h4> 經濟信息</h4>
          </div>
          <div className="split">
            {country.currencies.map((currency) => (
              <div>
                <p>貨幣名: {currency.name}</p>
                <p>貨幣縮寫: {currency.code}</p> <p>符號: {currency.symbol}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="geographic-details sub-containers">
          <div className="title">
            <h4>位置信息</h4>
          </div>
          <div className="split">
            <p>地區: {country.subregion}</p>
            {country.timezones.map((timezone) => (
              <p>{timezone}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
