import {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navbar/Navbar';
import { ToDoList } from './components/ToDoList/ToDoList';
import AddTodoModal from './components/AddTodoModal/AddTodoModal';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
      fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
          setTodos(Object.values(data));
      })
      .catch(err => console.log(err))
  }, []);

  const onTodoAdd = async (values) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    setShowAddTodo(false);

    const result = await response.json();

    setTodos(state => [...state, result]); 
  }

  const onTodoAddClick = () => {
    setShowAddTodo(true);
  }

  const onTodoAddClose = () => {
    setShowAddTodo(false);
  }

  return (
    <>
      <Navigation />
      <ToDoList todos={todos} onTodoAddClick={onTodoAddClick}/>
      <AddTodoModal show={showAddTodo} onTodoAddClose={onTodoAddClose} onTodoAdd={onTodoAdd}/>
    </>
  )
}

export default App
