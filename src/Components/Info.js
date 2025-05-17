import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Info = ({ setAll }) => {
  return (
    <div className="info">
      <h3>Information</h3>
      <p>
        Task Tracker is a simple application designed to help you track your
        daily tasks and organize your work
      </p>
      <p>
        You can add multiple tasks or delete completed ones by double-clicking
        on the task
      </p>
      <p>
        The application is a basic version with potential for future development
      </p>
      <p>Copyright &copy; 2025 - Dev Ali</p>
      <button onClick={() => setAll(true)}>
        <FaArrowAltCircleLeft />
        Go Back
      </button>
    </div>
  );
};

export default Info;
