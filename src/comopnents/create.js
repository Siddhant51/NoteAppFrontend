import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./form";

const BASE_URI = "https://noteapp-api-92cs.onrender.com";

const Create = ({ userId }) => {
  const navigate = useNavigate();
  const [note, setNote] = useState({
    userId,
    title: "",
    description: "",
    color: "#5585b5",
    font: "consolas",
  });

  const handelChange = (event) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const create = () => {
    const { userId, title, description, color, font } = note;
    if (userId && title && description && color && font) {
      axios.post(`${BASE_URI}/create`, note).then(() => navigate("/"));
    } else {
      alert("invalid");
    }
  };

  return (
    <Form
      handelChange={handelChange}
      setNote={setNote}
      note={note}
      create={create}
    />
  );
};

export default Create;
