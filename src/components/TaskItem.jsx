function TaskItem({ task, deleteTask, toggleComplete, index }) {
    return (
        <li>
            <span
            style={{
                textDecoration: task.completed
                ? "line-through"
                : "none",
            }}
            >
                {task.text}
            </span>
           
           <div className="button-group">
            <button 
            className="button-complete"
            onClick={() => toggleComplete(index)}>
                Complete
            </button>
           
            <button 
            className="delete-button"
            onClick={() => deleteTask(index)}>
                Delete
            </button>
            </div>
        </li>
    );
}

export default TaskItem;