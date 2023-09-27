import { useState } from 'react';

import { useForm } from '../../hooks/useForm';

import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm/ModalForm';

function AddTodoModal() {
	const [formValues, setFormValues] = useState({
		text: '',
	});

	const onChangeHandler = (e) => {
		setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))

	};

	const submitForm = (e) => {
		e.preventDefault();

		console.log(formValues);
	};

	return (
		<div className="modal show" style={{ display: 'block', position: 'initial' }}>
			<Modal show={true}>
				<Modal.Header closeButton>
					<Modal.Title>Add todo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ModalForm
						submitForm={submitForm}
						formValues={formValues}
						onChange={onChangeHandler}
					/>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default AddTodoModal;
