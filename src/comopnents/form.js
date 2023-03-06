import React from "react";
import "./form.css";

const Form = ({ handelChange, setNote, note, noteId, create, update, del }) => {
  return (
    <div className="form">
      <div className="options">
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#d63447",
            height: "40px",
            width: "40px",
          }}
          onClick={() => setNote({ ...note, color: "#d63447" })}
        ></div>
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#5585b5",
            height: "40px",
            width: "40px",
          }}
          onClick={() => setNote({ ...note, color: "#5585b5" })}
        ></div>
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#3baea0",
            height: "40px",
            width: "40px",
          }}
          onClick={() => setNote({ ...note, color: "#3baea0" })}
        ></div>
        <div
          style={{
            cursor: "pointer",
            paddingTop: "10px",
            fontFamily: "Consolas",
            height: "40px",
            width: "40px",
            textAlign: "center",
          }}
          onClick={() => setNote({ ...note, font: "consolas" })}
        >
          Aa
        </div>
        <div
          style={{
            cursor: "pointer",
            fontFamily: "Ink Free",
            height: "40px",
            width: "40px",
            textAlign: "center",
          }}
          onClick={() => setNote({ ...note, font: "ink free" })}
        >
          Aa
        </div>
        <div
          style={{
            cursor: "pointer",
            fontFamily: "Bodoni MT",
            height: "40px",
            width: "40px",
            textAlign: "center",
          }}
          onClick={() => setNote({ ...note, font: "bodoni mt" })}
        >
          Aa
        </div>
      </div>
      <div className="container" style={{ backgroundColor: note.color }}>
        <input
          style={{ fontFamily: note.font }}
          type="text"
          name="title"
          value={note.title}
          onChange={handelChange}
          placeholder="Title"
        ></input>
        <textarea
          style={{ fontFamily: note.font }}
          type="text"
          name="description"
          value={note.description}
          onChange={handelChange}
          placeholder="Description"
        ></textarea>

        {!noteId ? (
          <div className="create" onClick={create}>
            Create
          </div>
        ) : (
          <div className="btns">
            <div className="delete" onClick={del}>
              Delete
            </div>
            <div className="update" onClick={update}>
              Update
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
