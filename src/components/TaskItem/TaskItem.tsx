import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Task from '../Task/Task';
import TaskEdit from '../TaskEdit/TaskEdit';

const TaskList = ({ task, index, handleClickDel, handleClickEdit }) => {
  const [edit, setEdit] = useState(false);

  const [currentTask, setCurrentTask] = useState(task);

  const handleClickBtn = () => {
    if (!currentTask.length) {
      handleClickDel(index);
      setEdit((prev) => !prev);
    } else {
      handleClickEdit(currentTask, index);
      setEdit((prev) => !prev);
    }
  };

  useEffect(() => {
    setCurrentTask(task);
  }, [task]);

  return (
    <li className="todo-task__list task">
      <label htmlFor="task-1" className="task__label">
        <span>{index + 1}</span>
        {edit ? (
          <TaskEdit
            task={task}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
          />
        ) : (
          <Task task={task} />
        )}
      </label>
      <div className="task-btn__container">
        {edit ? (
          <>
            <Button name={'Save'} handleClickBtn={handleClickBtn} />
            <Button
              cl={'cancel'}
              name={'Cancel'}
              handleClickBtn={() => {
                setEdit(false);
              }}
            />
          </>
        ) : (
          <>
            <Button
              cl={'delete'}
              name={'Delete'}
              handleClickBtn={() => {
                handleClickDel(index);
              }}
            />
            <Button
              name={'Edit'}
              handleClickBtn={() => {
                setEdit(true);
              }}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default TaskList;
