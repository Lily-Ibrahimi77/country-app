import React from 'react';

const CountryCard = (props) => {
  const { country} = props;

  return (
    <div>
      <div>
        <h2>{country.name.common}</h2>
        <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>
          Population: {country.population}
        </p>
        <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>
          Capital: {country.capital}
        </p>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      </div>
    </div>
  );
};

export default CountryCard;
