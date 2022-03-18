import React, { useState } from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  const navToggle = {
    float: 'right',
    right: '33px',
    position: 'absolute',
  }

  const [checked, setChecked] = useState(false)

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.themeMode} bg-${props.themeMode}`}
        style={{color: 'white'}}
      >
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
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
            <form className="form-inline float-right" style={navToggle}>
            <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={props.toggleSecondary}
                  checked={props.themeMode === 'secondary' ? true : false}
                />
                <label className={`form-check-label text-${props.themeMode === 'light' ? 'dark' : 'light'}`}>
                  {props.themeMode === 'light' ? 'Enable' : 'Disable'} SecondaryMode
                </label>
              </div>
              <div className="form-check form-switch ml-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={props.toggle}
                  checked={props.themeMode === 'dark' ? true : false}
                />
                <label className={`form-check-label text-${props.themeMode === 'light' ? 'dark' : 'light'}`}>
                  {props.themeMode === 'light' ? 'Enable' : 'Disable'} DarkMode
                </label>
              </div>
            </form>
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
