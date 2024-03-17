import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            iNotebook
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  aria-current="page"
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link to="/login" className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary mx-2">
                Signup
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
