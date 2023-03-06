import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const BASE_URI = "https://noteapp-api-92cs.onrender.com";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post(`${BASE_URI}/login`, user).then((res) => {
        console.log(res);
        localStorage.setItem("userData", JSON.stringify(res.data.user));
        setLoginUser(res.data.user);
        navigate("/");
      });
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handelChange}
        placeholder="Username"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handelChange}
        placeholder="Password"
      ></input>
      <div className="loginbtn" onClick={login}>
        Login
      </div>
      <div> or </div>
      <div className="btn" onClick={() => navigate("/register")}>
        Register
      </div>
    </div>
  );
};

export default Login;
