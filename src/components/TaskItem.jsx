function TaskItem({ task, deleteTask, index}) {
    return (
        <li>
            {task}

            <button onClick={() => deleteTask(index)}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;