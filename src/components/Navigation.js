import React from "react";

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
              <a className="nav-link" href="/">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/realisations">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mentions">
                mentions légales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
