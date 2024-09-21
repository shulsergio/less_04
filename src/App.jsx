import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  Form,
  Filter,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectTodos } from 'reduxTodo/selectors';
import { fetchTodos } from 'reduxTodo/todoOps';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />

          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <>
              <Filter />
              <TodoList />
            </>
          )}
          {error && <Text textAlign="center">Oops! Error.</Text>}
          {isLoading && <p>Loading...</p>}
        </Container>
      </Section>
    </>
  );
};
