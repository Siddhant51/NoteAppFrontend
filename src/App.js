import React, { useState } from "react";
import Home from "./comopnents/home";
import Register from "./comopnents/register";
import Login from "./comopnents/login";
import Create from "./comopnents/create";
import Update from "./comopnents/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [user, setLoginUser] = useState(userData || null);
  
  window.onbeforeunload = function () {
    localStorage.clear();
  };
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user ? (
                <Home
                  user={user}
                  userId={user._id}
                  setLoginUser={setLoginUser}
                />
              ) : (
                <Login setLoginUser={setLoginUser} replace to={"/login"} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create"
            element={
              user ? (
                <Create userId={user._id} />
              ) : (
                <Login setLoginUser={setLoginUser} replace to={"/login"} />
              )
            }
          />
          <Route
            path="/update"
            element={
              user ? (
                <Update userId={user._id} />
              ) : (
                <Login setLoginUser={setLoginUser} replace to={"/login"} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
