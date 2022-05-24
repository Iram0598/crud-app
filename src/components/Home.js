import React from "react";
import { Button, Table } from "react-bootstrap";
import '../components/Home.css'
import { UserContext } from "../userContext/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useContext(UserContext);


  return (
    <div>
      <h1>Employee Management system</h1>
      <Link to="/create">
      <Button className="create_btn" variant="primary">Create user</Button>{" "}
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.position}</td>
              <td>{users.salary}</td>
              <td>
              <Link to={"/read/"+users.id}>
                <Button className="action_btn" variant="success">Read
                </Button>{" "}
                </Link>
               <Link to= {"/edit/"+users.id}>
               <Button className="action_btn" variant="info">Edit
                </Button>{" "}
               </Link>
                <Link to={"/delete/"+users.id}>
                <Button className="action_btn" variant="danger">Delete
                </Button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
