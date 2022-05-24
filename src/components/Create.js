import React, { useState } from "react";
import "../components/Create.css";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../userContext/UserContext";
import { Link } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useContext(UserContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const update = (e) => {
    setId(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateSalary = (e) => {
    setSalary(e.target.value);
  };

  const addUser= (e)=>
  {
    e.preventDefault();
    setUsers([...users, {id:id, name:name, position:position, salary:salary}])

  }
  return (
    <div className="create">
      
      <Form className="form" onSubmit={addUser}>
        <Form.Group>
        <h1>Create a new user</h1>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={update}
            placeholder="Enter ID"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter position"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={updateSalary}
            placeholder="Enter salary"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">Create
                </Button>{" "}
                <Link to = "/">
                <Button className="action_btn" variant="info">Back to home
                </Button>{" "}
                </Link>
        
      </Form>
    </div>
  );
};

export default Create;
