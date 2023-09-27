import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navbar/Navbar';
import { ToDoList } from './components/ToDoList/ToDoList';

function App() {

  return (
    <>
      <Navigation />
      <ToDoList />
    </>
  )
}

export default App
