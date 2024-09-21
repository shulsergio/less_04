import { Text } from 'components';
import s from './Todo.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todoOps';

export const Todo = ({ counter, id, text }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className={s.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{counter}
      </Text>
      <Text>{text}</Text>
      <button type="button" onClick={handleClick} className={s.deleteButton}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
