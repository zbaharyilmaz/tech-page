import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="/img/harvey-tech-logo.svg"
            alt="ZeTech"
            height="50"
            className="me-2"
          />
        </a>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Hizmetler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portföy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Ekip
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
