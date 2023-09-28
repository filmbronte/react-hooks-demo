import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ModalForm({
	onSubmit,
	formValues,
	onChange,
	onTodoAddClose,
}) {
	return (
		<Form onSubmit={onSubmit}>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Add: </Form.Label>
				<Form.Control
					name="text"
					value={formValues.name}
					onChange={onChange}
					placeholder="Todo..."
				/>
			</Form.Group>
			<div style={{ textAlign: 'center' }}>
				<Button variant="secondary" onClick={onTodoAddClose}>Close</Button>
				<Button variant="primary" type='submit' style={{ marginLeft: '20px' }}>
					Save
				</Button>
			</div>
		</Form>
	);
}

export default ModalForm;
