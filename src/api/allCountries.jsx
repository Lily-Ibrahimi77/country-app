import axios from 'axios';
import { fetchCountriesStart, fetchCountriesSuccess, fetchCountriesError } from './../features/countriesSlice';


const API_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = () => async (dispatch) => {
  try {
    dispatch(fetchCountriesStart());
    const response = await fetch(API_URL + '/all');
    const data = await response.json();
    dispatch(fetchCountriesSuccess(data)); 
  } catch (error) {
    dispatch(fetchCountriesError(error.message));
  }
};

// If the API is down
try {
  const response = await axios.get('/data.json');
  const data = response.data;
  return data;
} catch (error) {
  console.error(error);
  return [];
}
};
