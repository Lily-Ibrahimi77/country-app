import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { fetchCountries } from './../api/allCountries';
import { fetchCountriesStart, fetchCountriesSuccess, fetchCountriesError } from './../features/countriesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { countriesData, loading, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountriesStart());
    fetchCountries()
      .then((data) => dispatch(fetchCountriesSuccess(data)))
      .catch((error) => dispatch(fetchCountriesError(error)));
  }, [dispatch]);

  const tableData = useMemo(() => {
    if (countriesData) {
      return countriesData.slice(0, 10).map((country) => ({
        name: country.name.common,
        capital: country.capital?.[0] ?? 'N/A',
        population: country.population?.toLocaleString() ?? 'N/A',
      }));
    } else {
      return [];
    }
  }, [countriesData]);

  return (
    <div>
      <h1>Countries Table</h1>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error fetching the data.</p>}
      {!loading && !error && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Capital</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((country) => (
              <tr key={country.cca2}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Home;
