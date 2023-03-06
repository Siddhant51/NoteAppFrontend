import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "./form";
import axios from "axios";

const BASE_URI = "http://localhost:3000";

const Update = ({ userId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { noteId, title, description, color, font } = location.state;

  const [note, setNote] = useState({
    userId,
    noteId,
    title,
    description,
    color,
    font,
  });

  const handelChange = (event) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const update = () => {
    const { userId, noteId, title, description, color, font } = note;
    if (userId && noteId && title && description && color && font) {
      axios.post(`${BASE_URI}/update`, note).then(() => navigate("/"));
    } else {
      alert("invalid");
    }
  };

  const del = () => {
    const { userId, noteId } = note;
    if (userId && noteId) {
      axios.post(`${BASE_URI}/delete`, note).then(() => navigate("/"));
    } else {
      alert("invalid");
    }
  };

  return (
    <Form
      handelChange={handelChange}
      setNote={setNote}
      note={note}
      noteId={noteId}
      update={update}
      del={del}
    />
  );
};

export default Update;
