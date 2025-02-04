import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white " to={"/"}>
            Start Framework
          </Link>
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
                <Link
                  className="nav-link fw-bold text-white active me-3 "
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-white active me-3"
                  aria-current="page"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-white active me-3"
                  aria-current="page"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  fw-bold text-white active me-3"
                  aria-current="page"
                  to={"/portfolio"}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
