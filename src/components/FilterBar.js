import React from 'react'

const FilterBar = ({ filterByRegion }) => {
  return (
    <button className="filter-bar">
      Filter By Region
      <i class="fas fa-chevron-down"></i>
      <ul className="filter-choice" onClick={filterByRegion}>
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </button>
  )
}

export default FilterBar
