import React from "react";
import HomePage from "./Pages/HomePage";
import TaskDetails from "./Pages/TaskDetails";

import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [task, setTask] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage task={task} setTask={setTask} />} />
        <Route
          path="/TaskDetails/:id"
          element={<TaskDetails task={task} setTask={setTask} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
