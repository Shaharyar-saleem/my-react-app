import React, {useState} from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string,
};

Navbar.defaultProps = {
  about: "About Us",
};
