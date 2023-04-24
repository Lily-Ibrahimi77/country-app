import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice.js';


export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
