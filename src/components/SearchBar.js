import React from 'react'

const SearchBar = ({ setSearchValue, searchValue }) => {
  return (
    <div className="search-bar">
      <button className="search-button">
        <i class="fas fa-search"></i>
      </button>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
        value={searchValue}
        name="countryName"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  )
}

export default SearchBar
