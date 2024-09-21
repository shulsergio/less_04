import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filteredTodos = todos.filter(({ text }) =>
    text.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <>
      {!todos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {filteredTodos.map(
            (todo, index) => (
              console.log(todo),
              (
                <GridItem key={todo.id}>
                  <Todo counter={index + 1} {...todo} />
                </GridItem>
              )
            ),
          )}
        </Grid>
      )}
    </>
  );
};
