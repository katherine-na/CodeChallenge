import "./TaskList.css";
import { FaCheck, FaRegClock } from "react-icons/fa6";


const TaskList = ({ taskComplete, filteredTasks, deleteTask, task }) => {

  return (
    <div>
      <div className="task-list-ctn">
        {task.map((task) => {
            const status = task.completed
            return <div className="task-item">
            <button className="btn-complete" onClick={() => taskComplete(task.id)}>
                {status ?<FaRegClock /> : <FaCheck /> }
            </button>
            <p>{task.name} <span style={{color: status ? 'green' : 'red'}}>{status? 'Completada':'Pendiente'}</span></p>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        })}
      </div>
    </div>
  );
};

export default TaskList;
