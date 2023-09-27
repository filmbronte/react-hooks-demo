import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ModalForm from './ModalForm/ModalForm';

function AddTodoModal() {
	const [formValues, setFormValues] = useState([]);

	const onChangeHandler = (e) => {

	};

	const submitForm = (e) => {
		e.preventDefault();

		console.log('submitted');
	};

	return (
		<div className="modal show" style={{ display: 'block', position: 'initial' }}>
			<Modal show={true}>
				<Modal.Header closeButton>
					<Modal.Title>Add todo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ModalForm submitForm={submitForm}/>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default AddTodoModal;
