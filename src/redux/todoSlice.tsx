import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TaskProps } from '../components/Todo/Todo.types';

interface TodoState {
  tasks: TaskProps[];
  taskFilter: string;
}

const initialState: TodoState = {
  tasks: [
    {
      id: uuidv4(),
      text: 'Задача первая: Закончить отчет по проекту до конца дня.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Задача вторая: Провести встречу с командой разработчиков в 14:00.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Задача третья: Обновить документацию по новому релизу.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Задача четвёртая: Ответить на письма клиентов и партнеров.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Задача пятая: Подготовить презентацию для совещания в пятницу.',
      done: false,
    },
  ],
  taskFilter: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<string>) => {
      const createTask = { id: uuidv4(), text: action.payload, done: false };
      state.tasks = [...state.tasks, createTask];
    },
    setTaskFilter: (state, action: PayloadAction<string>) => {
      state.taskFilter = action.payload;
    },

    setTaskChecked: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    },
    setTaskSave: (
      state,
      action: PayloadAction<{ id: string; currentText: string }>
    ) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.currentText }
          : task
      );
    },
    setTaskDelete: (state, action: PayloadAction<string>) => {
      state.tasks = [...state.tasks].filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setTasks,
  setTaskFilter,
  setTaskChecked,
  setTaskSave,
  setTaskDelete,
} = todoSlice.actions;

export default todoSlice.reducer;
