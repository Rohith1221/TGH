import React from "react";
import { useState } from "react";
import Quote from "./Quote";
import Bookmarks from "./Bookmarks";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav_container">
      <Link to="/">Home</Link>
      <Link to="/bookmarks">Bookmarks</Link>
    </div>
  );
}

export default Navbar;
