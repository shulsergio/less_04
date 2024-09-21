import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './todoOps';


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
      })
      .addCase(addTodo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addTodo.rejected, (state, {payload}) => {
        state.loading = false;
        state.items = [];
        state.error = payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.loading = true;
        state. error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.items = state.items.filter(({id}) => 
        id !== payload)
      })
      .addCase(deleteTodo.rejected, (state, {payload}) => {
        state.loading = false;
        state.items = []
        state.error = payload;
      })
});

export const todosReducer = todosSlice.reducer;
