import Todo from './components/Todo/Todo';
import Filter from './components/Filter/Filter';
import TodoForm from './components/TodoForm/TodoForm';
import { SectionWrapper } from './App.styled';

function App() {
  return (
    <SectionWrapper>
      <Filter />
      <Todo />
      <TodoForm />
    </SectionWrapper>
  );
}

export default App;
