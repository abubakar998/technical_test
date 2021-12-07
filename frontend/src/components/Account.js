import React from "react";

import { Link } from "react-router-dom";

export default function Account() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item me-3">
        <Link className="nav-link" to="/register">
          <i className="fas fa-user-plus"></i>
          <span className="ps-1">Register</span>
        </Link>
      </li>
      <li className="nav-item me-3">
        <Link className="nav-link" to="/login">
          <i className="fas fa-sign-in-alt"></i>
          <span className="ps-1">Login</span>
        </Link>
      </li>
    </ul>
  );
}

// this is comment
