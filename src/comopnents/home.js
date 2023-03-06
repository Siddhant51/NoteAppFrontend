import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const BASE_URI = "http://localhost:3000";

const Home = ({ user, userId, setLoginUser }) => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const header = `${user.name}'s Dashboard`;

  useEffect(() => {
    axios
      .post(`${BASE_URI}/notes`, { userId })
      .then((response) => {
        setNotes(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <div className="content">
      <div className="topbar">
        <h2>{header}</h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <div
          className="logout"
          onClick={() => {
            localStorage.removeItem("userData");
            setLoginUser();
          }}
        >
          Logout
        </div>
      </div>
      <div className="body">
        {notes.map((note) => {
          if (!search) {
            return (
              <div
                style={{ fontFamily: note.font, backgroundColor: note.color }}
                className="note"
                key={note._id}
                onClick={() =>
                  navigate("/update", {
                    state: {
                      noteId: note._id,
                      title: note.title,
                      description: note.description,
                      color: note.color,
                      font: note.font,
                    },
                  })
                }
              >
                <div className="title">
                  <h4>{note.title}</h4>
                </div>
                <div className="description">
                  <p>{note.description}</p>
                </div>
              </div>
            );
          } else {
            if (note.title.toUpperCase().includes(search.toUpperCase())) {
              return (
                <div
                  style={{ fontFamily: note.font, backgroundColor: note.color }}
                  className="note"
                  key={note._id}
                  onClick={() =>
                    navigate("/update", {
                      state: {
                        noteId: note._id,
                        title: note.title,
                        description: note.description,
                        color: note.color,
                        font: note.font,
                      },
                    })
                  }
                >
                  <div className="title">
                    <h4>{note.title}</h4>
                  </div>
                  <div className="description">
                    <p>{note.description}</p>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
      <div className="add" onClick={() => navigate("/create")}>
        <h2>+</h2>
      </div>
    </div>
  );
};

export default Home;
