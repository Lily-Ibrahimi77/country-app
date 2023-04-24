import axios from "axios";
import {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesError,
} from "./../features/countriesSlice";

const API_URL = "https://restcountries.com/v3.1";

export const fetchCountries = () => async (dispatch) => {
  dispatch(fetchCountriesStart());
  try {
    const response = await axios.get(API_URL + "/all");
    const data = response.data;
    dispatch(fetchCountriesSuccess(data));
  } catch (error) {
    dispatch(fetchCountriesError(error.message));
    const response = await fetch("/data.json");
    const data = await response.json();
    dispatch(fetchCountriesSuccess(data));
  }
};
