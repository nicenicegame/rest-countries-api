import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import MenuBar from './components/MenuBar'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import CountriesList from './components/CountriesList'
import CountryCard from './components/CountryCard'

const App = () => {
  const [countries, setCountries] = useState([])
  const [shownCountries, setShownCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    const shown = [...countries]

    setShownCountries(
      shown.filter((country) => {
        return country.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      })
    )
  }, [searchValue])

  const fetchCountries = () => {
    setIsLoading(false)
    fetch('https://restcountries.eu/rest/v2/all', {
      method: 'GET',
    })
      .then((fetchData) => fetchData.json())
      .then((data) => {
        setCountries(data)
        setShownCountries(data)
        setIsLoading(true)
      })
      .catch((error) => console.log(error))
  }

  const filterByRegion = (e) => {
    let regionName = e.target.innerText
    if (regionName === 'America') {
      regionName += 's'
    }
    const filterData = [...countries]
    const filteredCountries = filterData.filter(
      (country) => country.region === regionName
    )
    setShownCountries(filteredCountries)
  }

  return (
    <div className="main">
      <Nav />
      <MenuBar>
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <FilterBar filterByRegion={filterByRegion} />
      </MenuBar>
      <CountriesList>
        {isLoading && shownCountries ? (
          shownCountries.map((country, index) => {
            return <CountryCard key={index} country={country} />
          })
        ) : (
          <h1 className="loading">Loading...</h1>
        )}
      </CountriesList>
    </div>
  )
}

export default App
