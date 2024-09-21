import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoOps';

export const Form = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const todo = {
      text: query,
    };
    dispatch(addTodo(todo));
    setQuery('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
