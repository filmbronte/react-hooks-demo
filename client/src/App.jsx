import {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navbar/Navbar';
import { ToDoList } from './components/ToDoList/ToDoList';
import AddTodoModal from './components/AddTodoModal/AddTodoModal';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
          setTodos(Object.values(data));
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Navigation />
      <ToDoList todos={todos}/>
      <AddTodoModal/>
    </>
  )
}

export default App
