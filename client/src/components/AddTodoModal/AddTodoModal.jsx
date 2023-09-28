import { useForm } from '../../hooks/useForm';

import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm/ModalForm';

function AddTodoModal({
	onTodoAdd,
}) {
	const { formValues, onChangeHandler, onSubmit } = useForm({
		text: '',
	}, onTodoAdd);

	return (
		<div className="modal show" style={{ display: 'block', position: 'initial' }}>
			<Modal show={true}>
				<Modal.Header closeButton>
					<Modal.Title>Add todo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<ModalForm
						onSubmit={onSubmit}
						formValues={formValues}
						onChange={onChangeHandler}
					/>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default AddTodoModal;
