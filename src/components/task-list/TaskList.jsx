import TaskListItem from "./TaskListItem"

const TaskList = (props) => {
    // Props
    const { tasks } = props

    const tasksJSX = tasks.map(
        task => <TaskListItem key={task.id} {...task}></TaskListItem>
    )

    return (
        <div>
            {tasksJSX}
        </div>
    )
}

export default TaskList