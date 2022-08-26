import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {

  // State
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(p => [task, ...p])
  }

  return (
    <div className="App">
      <Form onSubmit={addTask}></Form>
    </div>
  );
}

export default App;
