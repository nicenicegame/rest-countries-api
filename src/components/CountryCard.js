import React from 'react'

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <div className="flag">
        <img src={country.flag} />
      </div>
      <div className="country-text">
        <h3 className="country-name">{country.name}</h3>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  )
}

export default CountryCard
