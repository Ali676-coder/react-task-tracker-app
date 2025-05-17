import React from "react";
import { useState } from "react";

const Form = ({ show, task, setTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);
  // Insert data function
  const submitHandler = (e) => {
    e.preventDefault();

    const now = new Date();
    const addedAt = now.toISOString();

    const oneTask = { title, description, deadline, reminder, addedAt };

    const id = Date.now().toString();
    const newTask = { ...oneTask, id };
    setTask([...task, newTask]);

    setTitle("");
    setDeadline("");
    setDescription("");
    setReminder(false);
  };

  if (!show) return null;
  return (
    <div className="task-form">
      <form onSubmit={submitHandler} autoComplete="off">
        <label htmlFor="title">Title</label>

        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          id="title"
          type="text"
          required
          placeholder="Add Task Title"
        />

        <label htmlFor="description">Description</label>

        <input
          type="text"
          placeholder="Add Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label htmlFor="date">Dead Line</label>

        <input
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          value={deadline}
          id="date"
          type="datetime-local"
          placeholder="Add Day&Time"
        />
        <input type="submit" value="Save Task" />
      </form>
    </div>
  );
};

export default Form;
