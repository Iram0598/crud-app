import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
const [token, setToken] = useState(null);

    const [users, setUsers] = useState([
        {id: 1, name: "Iram", position: "Front end dev", salary: 28000},
        {id: 2, name: "Rakib", position: "Full stack dev", salary: 25000},
        {id: 3, name: "Rothio", position: "Software engineer", salary: 40000},
    ]);

    return(
        <UserContext.Provider value= {[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}

