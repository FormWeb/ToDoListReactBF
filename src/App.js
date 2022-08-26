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

  return (
    <div className="App">
      <Form onSubmit={addTask}></Form>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
