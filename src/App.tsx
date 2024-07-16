import Todo from './components/Todo/Todo';
import Filter from './components/Filter/Filter';
import TodoForm from './components/TodoForm/TodoForm';
import { Box } from '@mui/material';
import MainProvider from './providers/TasksProvider';
import SecondProvider from './providers/FilterProvider';

function App() {
  return (
    <>
      <MainProvider>
        <SecondProvider>
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
        </SecondProvider>
      </MainProvider>
    </>
  );
}

export default App;
