import Todo from './components/Todo/Todo';
import Filter from './components/Filter/Filter';
import TodoForm from './components/TodoForm/TodoForm';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        gap="15px"
        padding="15px"
        bgcolor="#a09d9d"
      >
        <Filter />
        <Todo />
        <TodoForm />
      </Box>
    </>
  );
}

export default App;
