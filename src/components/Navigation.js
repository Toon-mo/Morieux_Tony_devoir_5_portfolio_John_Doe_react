import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg   bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <p className="text-uppercase text-white-50 my-auto fs-4" href="/">
          john doe
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav nav-underline text-uppercase ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/realisations"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mentions"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
