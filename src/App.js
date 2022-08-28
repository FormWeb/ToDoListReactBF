import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import { useState } from 'react';
import TaskList from './components/task-list/TaskList';

function App() {

  // State
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(p => [task, ...p])
  }

  const deleteTask = (id) => {
    setTasks(p => p.filter(
      t => t.id !== id
    ))
  }
  
  const finishTask = (id) => {
    setTasks(p => p.map(
      t => t.id === id ? {...t, done: true} : t
    ))
  }

  return (
    <div className="App">
      <Form onSubmit={addTask}></Form>
      <TaskList tasks={tasks}
        onTaskDelete={deleteTask}
        onTaskFinish={finishTask}></TaskList>
    </div>
  );
}

export default App;
