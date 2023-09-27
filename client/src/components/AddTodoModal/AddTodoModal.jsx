import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm/ModalForm';

function AddTodoModal() {
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
					<ModalForm/>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary">Close</Button>
					<Button variant="primary">Save changes</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default AddTodoModal;
