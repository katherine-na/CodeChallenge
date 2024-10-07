import { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import FilterButtons from "../FilterButtons/FilterButtons";
import TaskList from "../TaskList/TaskList";
import './TodoApp.css'

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  // Cargar tareas de localStorage
  useEffect(() => {
    const taskStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(taskStorage);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);


  // Añadir tareas
  const AddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTask([...task, newTask]);
    console.log('task', task);
  };

  // Tareas completadas
  const taskComplete = (taskId) => {
    setTask(
      task.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task)
    );
  };

  //Eliminar tarea
  const deleteTask = (taskId) => {
    setTask(task.filter((task) => task.id !== taskId));
  };

  //Filtrar tareas segun su estado
  const filteredTasks = task.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  console.log('task', task);

  return (
    <div>
      <h1 className="task-title">Task List</h1>
      <FilterButtons setFilter={setFilter} />
      <TodoItem addTask={AddTask} />
      <TaskList
        task={filteredTasks}
        taskComplete={taskComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
