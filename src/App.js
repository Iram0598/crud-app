import React from "react";

import { Routes, Route } from "react-router-dom";
import Delete from "./components/Delete";
import Home from "./components/Home";
import Read from "./components/Read";
import { UserContext, UserProvider } from "./userContext/UserContext";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route path="/create/" element={<Create />} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
