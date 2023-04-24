import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  countryList: [], // Add default value for countryList
  data: [],

};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchCountriesStart: (state) => {
      state.loading = true;
    },
    fetchCountriesSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.countryList = action.payload;
    },
    fetchCountriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const { fetchCountriesStart, fetchCountriesSuccess, fetchCountriesError } =
  countriesSlice.actions;

export default countriesSlice.reducer;
