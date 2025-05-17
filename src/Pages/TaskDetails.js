import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TaskDetails = ({ task, setTask }) => {
  let navigate = useNavigate();
  let params = useParams();
  const [oneTask, setOneTask] = useState({});
  //   Fetching data
  useEffect(() => {
    fetch(`http://localhost:8000/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setOneTask(data);
      });
  }, [params.id]);

  //   Date Function
  const getTimeLeft = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);

    const diffInMs = deadlineDate - now;

    if (diffInMs <= 0) {
      return "Time's up";
    }

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays >= 1) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
    } else {
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""}`;
    }
  };
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", " at");
  };
  //   Date Function

  // Delete Handler
  const delteHandler = () => {
    fetch(`http://localhost:8000/tasks/${params.id}`, {
      method: "DELETE",
    }).then((res) => {
      const updateTask = task.filter((item) => item.id !== params.id);
      setTask(updateTask);
    });
    navigate("/", { replace: true });
  };
  // complete Handler
  const completeHandler = () => {
    fetch(`http://localhost:8000/tasks/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reminder: true,
      }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        const updatedList = task.map((item) => {
          return item.id === params.id ? updatedTask : item;
        });
        setTask(updatedList);
        setOneTask(updatedTask);
      });
    navigate("/", { replace: true });
  };
  return (
    <div className="task-details">
      <div className="title">
        <h1>{oneTask.title}</h1>
        <Link to={"/"}>
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <div className="details">
        <div className="desc">
          <h3>Description</h3>
          <FaFile />
        </div>
        {!oneTask.description ? <p>Empty</p> : <p>{oneTask.description}</p>}
      </div>
      <div className="time">
        <div className="time-date">
          <h3>Time</h3>
          <FaClock />
        </div>
        <p>Added At : {oneTask.addedAt && formatDateTime(oneTask.addedAt)}</p>
        {!oneTask.deadline ? (
          <p>Dead Line : Empty</p>
        ) : (
          <p>Dead Line : {formatDateTime(oneTask.deadline)}</p>
        )}
        {!oneTask.deadline ? (
          <p>Time Left : Empty</p>
        ) : (
          <p>Time Left : {getTimeLeft(oneTask.deadline)}</p>
        )}
      </div>
      <div className="edit">
        <button onClick={completeHandler}>Completed</button>
        <button onClick={delteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default TaskDetails;
