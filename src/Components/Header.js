import React from "react";
import Button from "./Button";

const Header = ({ show, setShow, all, setAll }) => {
  return (
    <div className="header">
      <h2>Task Tracker</h2>
      <Button show={show} setShow={setShow} all={all} setAll={setAll}></Button>
    </div>
  );
};

export default Header;
