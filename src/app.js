import ReactDOM from "react-dom";
import React, { useRef, useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const filterBarRef = useRef(null);
  const filterBarOutRef = useRef(null);

  const fetchCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET",
    })
      .then((fetchData) => fetchData.json())
      .then((data) => {
        setCountries(data);
        setShownCountries(data);
      });
  };

  useEffect(() => {
    fetchCountries();

    const filterBar = filterBarRef.current;
    const filterBarOut = filterBarOutRef.current;

    filterBar.addEventListener("click", function () {
      // filterBarOut.classList.add("active");
      // this.children[1].classList.toggle("active");
    });

    filterBarOut.addEventListener("click", () => {
      // filterBarOut.classList.remove("active");
      // filterBar.children[1].classList.remove("active");
    });
  }, []);

  useEffect(() => {
    const shown = [...countries];

    setShownCountries(
      shown.filter((country) => {
        return country.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      })
    );
  }, [searchValue]);

  const filterByRegion = (regionName) => {
    const filterData = [...countries];
    const filteredCountries = filterData.filter(
      (country) => country.region === regionName
    );
    setShownCountries(filteredCountries);
  };

  return (
    <div className="main">
      <header>
        <nav className="nav-link">
          <a id="logo" href="/">
            Where in the world?
          </a>
          <p className="mode-toggle">
            <i class="far fa-moon"></i>Dark Mode
          </p>
        </nav>
      </header>

      <div className="menu">
        <div className="search-bar">
          <button className="search-button">
            <i class="fas fa-search"></i>
          </button>
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            name="countryName"
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <button className="filter-bar" ref={filterBarRef}>
          Filter By Region
          <i class="fas fa-chevron-down"></i>
          <ul className="filter-choice">
            <li
              onClick={() => {
                filterByRegion("Africa");
              }}
            >
              Africa
            </li>
            <li
              onClick={() => {
                filterByRegion("Americas");
              }}
            >
              America
            </li>
            <li
              onClick={() => {
                filterByRegion("Asia");
              }}
            >
              Asia
            </li>
            <li
              onClick={() => {
                filterByRegion("Europe");
              }}
            >
              Europe
            </li>
            <li
              onClick={() => {
                filterByRegion("Oceania");
              }}
            >
              Oceania
            </li>
          </ul>
        </button>
        <div className="filter-bar-out" ref={filterBarOutRef}></div>
      </div>

      <div className="countries-container">
        {shownCountries &&
          shownCountries.map((country, index) => {
            return (
              <div className="country-card" key={index}>
                <div className="flag">
                  <img src={country.flag} />
                </div>
                <div className="country-text">
                  <h3 className="country-name">{country.name}</h3>
                  <p>
                    Population:{" "}
                    <span>{country.population.toLocaleString()}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
