import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import "./index.css";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  const toggleComplete = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === indexToToggle) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Student Task Manager</h1>

      <p className="subtitle">
        Organize your daily tasks efficiently
      </p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{tasks.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>
            {
              tasks.filter(
                (task) => task.completed
              ).length
            }
          </p>
        </div>
      </div>

      <ul>
        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks yet 🚀
          </p>
        ) : (
          tasks.map((item, index) => (
            <TaskItem
              key={index}
              task={item}
              index={index}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;