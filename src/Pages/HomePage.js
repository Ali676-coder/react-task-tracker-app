import React, { useEffect } from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Task from "../Components/Task";
import Copy from "../Components/Copy";
import Info from "../Components/Info";

import { useState } from "react";
function HomePage({ task, setTask }) {
  // State for fetch data

  const [show, setShow] = useState(true);
  const [all, setAll] = useState(true);
  useEffect(() => {
    if (!all) setShow(false);
  }, [all]);

  return (
    <div className="homePage">
      <Header show={show} setShow={setShow} all={all} setAll={setAll} />
      {all ? (
        <>
          <Form show={show} task={task} setTask={setTask} />
          <Task task={task} setTask={setTask} />
          <Copy all={all} setAll={setAll} />
        </>
      ) : (
        <Info setAll={setAll} />
      )}
    </div>
  );
}

export default HomePage;
