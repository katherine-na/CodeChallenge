import "./TaskList.css";
import { IconName } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";


const TaskList = ({ taskComplete, filteredTasks, deleteTask, task }) => {
  return (
    <div>
      <div className="task-list-ctn">
        {task.map((task) => (
          <div className="task-item">
            <button className="btn-complete" onClick={() => taskComplete(task.id)}>
                <FaCheck />
            </button>
            <p>{task.name}</p>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
