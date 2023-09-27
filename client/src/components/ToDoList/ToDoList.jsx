import ListGroup from 'react-bootstrap/ListGroup';
import { ToDoItem } from './ToDoItem/ToDoItem';
import SubmitButton from '../Button/Button';

export const ToDoList = ({
	todos,
}) => {
	return (
		<div style={{ width: "20%", position: 'relative', margin: '70px auto', textAlign: 'center',}}>
			<h1>To Do List</h1>
			<ListGroup style={{marginBottom: "20px"}}>
				{todos.map(todo => <ToDoItem key={todo._id} {...todo} />)}
			</ListGroup>
			<SubmitButton />
		</div>
	)
}
