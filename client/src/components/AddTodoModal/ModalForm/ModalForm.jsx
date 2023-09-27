import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ModalForm({
	submitForm,
}) {
	return (
		<Form onSubmit={submitForm}>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Add: </Form.Label>
				<Form.Control placeholder="Todo..." />
			</Form.Group>
			<div style={{ textAlign: 'center' }}>
				<Button variant="secondary">Close</Button>
				<Button variant="primary" type='submit' style={{ marginLeft: '20px' }}>
					Save
				</Button>
			</div>
		</Form>
	);
}

export default ModalForm;
