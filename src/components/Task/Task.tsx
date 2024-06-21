import { useState } from "react";

const Task = ({ task }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className={`task__block ${isChecked ? 'task__block--checked' : ''}`}>
      <input type="checkbox" onChange={handleChange} />
      <span className="task__text">{task}</span>
    </div>
  );
};

export default Task;
