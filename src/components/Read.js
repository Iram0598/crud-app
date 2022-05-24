import React from 'react'
import { Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import '../components/Read.css'
import { useContext } from "react";
import { UserContext } from "../userContext/UserContext";
import { Link } from 'react-router-dom';

const Read = () => {

  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const user = users.filter((user) => user.id == id);
  
  return (
    <div className='read'>
     <h1>ID: {user[0].id}</h1>
     <h1>Name: {user[0].name}</h1>
     <h1>Position {user[0].position}</h1>
     <h1>Salary: {user[0].salary}</h1>
     <Link to="/">
      <Button variant="info">Back to home
      </Button>{" "}
      </Link>
    </div>
  )
}

export default Read
