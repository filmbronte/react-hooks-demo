import ListGroup from 'react-bootstrap/ListGroup';

export const ToDoItem = ({
	text,
	isCompleted,
}) => {
	return (
		<ListGroup.Item >
			{text}
		</ListGroup.Item>
	);
}
