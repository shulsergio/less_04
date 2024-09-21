import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
