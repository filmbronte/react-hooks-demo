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

  const onTodoAdd = async (values) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    const result = await response.json();

    console.log(result);
    
  }

  return (
    <>
      <Navigation />
      <ToDoList todos={todos}/>
      <AddTodoModal onTodoAdd={onTodoAdd}/>
    </>
  )
}

export default App
