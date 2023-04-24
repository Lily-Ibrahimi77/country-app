import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import CountryCard from './CountryCard';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchByCode, setSearchByCode] = useState(false);

  const countryList = useSelector((state) => state.countries.countryList);

  const filteredList = useMemo(() => {
    if (searchByCode) {
      return countryList.filter(
        (country) =>
          (country.cioc && country.cioc.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (country.cca3 && country.cca3.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } else {
      return countryList.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [countryList, searchByCode, searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchByCodeChange = (event) => {
    setSearchByCode(event.target.checked);
  };

  return (
    <div>
      <div>
        <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
        <label>
          Search by code:
          <input type="checkbox" checked={searchByCode} onChange={handleSearchByCodeChange} />
        </label>
      </div>
      <div>
        {filteredList.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
