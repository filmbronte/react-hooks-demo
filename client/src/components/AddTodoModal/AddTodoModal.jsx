import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function AddTodoModal() {
	const [formValues, setFormValues] = useState([]);

	const onChangeHandler = (e) => {

	};

	const submitForm = (e) => {
		e.preventDefault();

		console.log('submitted');
	};

	return (
		<div
			className="modal show"
			style={{ display: 'block', position: 'initial' }}
		>
			<Modal show={true}>
				<Modal.Header closeButton>
					<Modal.Title>Add todo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
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
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default AddTodoModal;
