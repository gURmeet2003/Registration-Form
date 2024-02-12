import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${window.location.origin}/user`, { name, email, password })
      .then((data) => {
        setName("");
        setEmail("");
        setPassword("");
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="name">
            <h4>Name</h4>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
          </div>

          <div className="email">
            <h4>Email</h4>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="password">
            <h4>Password</h4>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="register">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
