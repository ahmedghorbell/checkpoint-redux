import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_task, done_task, edit_task } from "../../JS/Actions/Actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newtask, setNewtask] = useState(task.text)

  const handleEdit = () => {
    dispatch(edit_task(task.id , newtask))
    handleClose()
  }
  return (
    <div style={{display:"flex" , justifyContent:"space-around" , marginBottom:"10px"}}>
      <span>{task.text}</span>
      <Button variant="success" onClick={() => dispatch(done_task(task.id))}>
        {task.isDone ? "UnDone" : "Done"}
      </Button>
      
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Form.Control value={newtask} onChange={(e) => setNewtask(e.target.value) }></Form.Control>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      <Button variant="danger" onClick={() => dispatch(delete_task(task.id))}>
        Delete
      </Button>
    </div>
  );
};

export default Task;
