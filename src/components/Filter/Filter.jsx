import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      onChange={e => dispatch(setFilter(e.target.value))}
      className={style.input}
      placeholder="Find it"
      name="filter"
    />
  );
};
