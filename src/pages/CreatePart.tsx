import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../css/list-style.css";

const CreatePart = ({ addTodo }: { addTodo: any }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name) return;
    addTodo(name, status);
    setName("");
    setStatus("");
  };

  return (
    <form>
      <div className="input-box">
        <TextField
          id="nametatusText"
          label="Enter Name"
          defaultValue="Name Value"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
        />
      </div>
      <div className="input-box">
        <TextField
          id="statusText"
          label="Enter Status"
          defaultValue="Status Value"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="input-box"
        />
      </div>
      <div className="btn-wrapper">
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Item
      </Button>
      </div>
    </form>
  );
};

export default CreatePart;
