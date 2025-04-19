import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Web Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
  );
}

export default Navbar;
