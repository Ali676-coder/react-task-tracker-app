import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Button = ({ show, setShow, all, setAll }) => {
  const [add, setAdd] = useState("close");
  const [color, setColor] = useState("red");
  const showTaskForm = () => {
    if (!all) {
      setAll(true);
      setShow(true);
      setAdd("close");
      setColor("red");
    } else {
      const newShow = !show;
      setShow(newShow);
      setAdd(newShow ? "close" : "add");
      setColor(newShow ? "red" : "green");
    }
  };
  useEffect(() => {
    if (!all) {
      setAdd("add");
      setColor("green");
    }
  }, [all]);
  return (
    <div className="btn">
      <button style={{ backgroundColor: color }} onClick={showTaskForm}>
        {add}
      </button>
    </div>
  );
};

export default Button;
