import { useState } from "react";
import './TodoItem.css'

const TodoItem = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    }
  };
  return (
    <div>
      <form className="form-task" onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nueva tarea"
          className="input-task"
        />
        <button className="btn-task" type="submit">Añadir tarea</button>
      </form>
    </div>
  );
};

export default TodoItem;
