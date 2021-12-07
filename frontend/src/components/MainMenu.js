import React from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item active me-3">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item me-3">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item me-3">
        <Link className="nav-link" to="/products">
          Featured Products
        </Link>
      </li>
    </ul>
  );
}
