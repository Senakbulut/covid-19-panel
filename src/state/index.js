import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      if (state.countries) {
        state.countries = action.payload.countries;
      } else {
        console.error("Cannot found countries.");
      }
    },
  },
});

export const { setCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
