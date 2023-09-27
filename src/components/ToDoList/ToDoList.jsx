import ListGroup from 'react-bootstrap/ListGroup';

export const ToDoList = () => {
	return(
	<div style={{width: "20%", position: 'relative', margin: '70px auto'}}>
	<h1>To Do List</h1>		
	<ListGroup >
		<ListGroup.Item >
			Link 1
		</ListGroup.Item>
		<ListGroup.Item  >
			Link 2
		</ListGroup.Item>
		<ListGroup.Item action >
			This one is a button
		</ListGroup.Item>
	</ListGroup>
	</div>
	)
}
