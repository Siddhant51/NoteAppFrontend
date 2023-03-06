import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const BASE_URI = "http://localhost:3000";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password } = user;

    if (name && email && password) {
      axios.post(`${BASE_URI}/register`, user).then(() => navigate("/login"));
    } else {
      alert("invalid");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handelChange}
        placeholder="Name"
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handelChange}
        placeholder="Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handelChange}
        placeholder="Password"
      ></input>
      <div className="registerbtn" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="btn" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
