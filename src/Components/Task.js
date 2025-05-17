import React from "react";
import { Link } from "react-router-dom";
const Task = ({ task, setTask }) => {
  // Double Click Function
  const importantHandler = (id) => {
    const updatedTasks = task.map((item) => {
      return item.id === id ? { ...item, reminder: !item.reminder } : item;
    });
    setTask(updatedTasks);
  };
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
  return (
    <div className="task">
      <ul>
        {!task || task.length === 0 ? (
          <p>There is no tasks</p>
        ) : (
          task.map((item) => {
            return (
              <Link to={`/TaskDetails/${item.id}`} key={item.id}>
                <li
                  className={item.reminder ? "important" : ""}
                  onDoubleClick={() => {
                    importantHandler(item.id);
                  }}
                >
                  <div>
                    <h3>{item.title}</h3>
                    <div className="date">
                      {!item.deadline ? (
                        <p>Dead Line : Empty</p>
                      ) : (
                        <p>Dead Line : {formatDateTime(item.deadline)}</p>
                      )}
                      {!item.deadline ? (
                        <p>Time Left : Empty</p>
                      ) : (
                        <p>Time Left : {getTimeLeft(item.deadline)}</p>
                      )}
                    </div>
                  </div>
                </li>
              </Link>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Task;
