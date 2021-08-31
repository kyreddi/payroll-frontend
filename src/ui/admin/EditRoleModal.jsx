import React, {useState, useEffect} from 'react';
import {
  Button,
  Modal,
  Table,
  Form,
  Spinner
} from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import EditRoleTable from './EditRoleTable.jsx';

function EditRoleModal({show, setShow, data, fullscreen}) {

  const auth = useSelector(state => state.auth);

  // const [permissionData, setPermissionData] = useState({});
  const [btnText, setBtnText] = useState('Save');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [records, setRecords] = useState([]);

  const handleShow = () => {
    setShow(!show);
  }

  const handleSubmit = () => {
    setBtnText(
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
    setBtnDisabled(true);
    let body = []
    records.forEach((item, i) => {
      item.role = data.name;
      body.push(item);
    });

    let url = "http://localhost:8080/api/access/rolePermission";
    axios.patch(url,
      body,
      {
        "headers": {
          "Content-Type": "application/json",
          "Authorization": auth.type + " " + auth.token
        }
      }
    )
    .then(res => {
      setBtnText('Save');
      setBtnDisabled(false);
    });
  }

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="roleName">Role</Form.Label>
            <Form.Control id="roleName" value={data.name} disabled />
          </Form.Group>
          <EditRoleTable role={data.name} records={records} setRecords={setRecords}/>
          <Button onClick={handleSubmit} disabled={btnDisabled}>{btnText}</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleShow}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditRoleModal;
