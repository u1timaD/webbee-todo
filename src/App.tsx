import Todo from './components/Todo/Todo';
import Filter from './components/Filter/Filter';
import TodoForm from './components/TodoForm/TodoForm';
import FilterProvider from './providers/FilterProvider';
import TasksProvider from './providers/TasksProvider';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <TasksProvider>
        <FilterProvider>
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
        </FilterProvider>
      </TasksProvider>
    </>
  );
}

export default App;
