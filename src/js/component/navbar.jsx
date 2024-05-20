import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Formula 1
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
