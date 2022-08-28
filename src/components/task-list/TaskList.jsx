import TaskListItem from "./TaskListItem"

const TaskList = (props) => {
    // Props
    const { tasks } = props
    const { onTaskDelete, onTaskFinish } = props

    const tasksJSX = tasks.map(
        task => <TaskListItem key={task.id} {...task}
            onDelete={(id) => onTaskDelete(id)}
            onFinish={(id) => onTaskFinish(id)}></TaskListItem>
    )

    return (
        <div>
            <h1>Liste de tâches</h1>
            {tasksJSX}
        </div>
    )
}

export default TaskList