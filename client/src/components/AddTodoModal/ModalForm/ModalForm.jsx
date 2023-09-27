import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ModalForm() {
  return (
    <>
      <Row>
        <Form.Label column lg={2}>
	Add todo:				
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="To do...." />
        </Col>
      </Row>
    </>
  );
}

export default ModalForm;
