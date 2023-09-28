import Button from 'react-bootstrap/Button';

function SubmitButton({
	onTodoAddClick,
}) {
  return (
    <>
      <div>
        <Button onClick={onTodoAddClick} variant="secondary" size="sm">
          Add
        </Button>
      </div>
    </>
  );
}

export default SubmitButton;
