import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todoOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchTodos.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
      }),
});
