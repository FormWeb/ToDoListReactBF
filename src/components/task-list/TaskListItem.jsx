const TaskListItem = ({ id, name, description, priority, done, onDelete, onFinish}) => {

    return (
        <div className={done ? "task-item-container finished" : "task-item-container"}>
            <div>
                <h4>{name} {priority === "urgente" && <span className="red">({priority})</span>}</h4>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={() => onFinish(id)} disabled={done}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </div>
    )
}

export default TaskListItem