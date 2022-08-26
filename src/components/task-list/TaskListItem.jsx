const TaskListItem = ({ id, name, description, priority, done}) => {

    return (
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{priority}</p>
            <button>Terminer</button>
            <button>Supprimer</button>
        </div>
    )
}

export default TaskListItem