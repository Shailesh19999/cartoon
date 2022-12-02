import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const logoutBtn = () => {
    localStorage.removeItem("loggedin");
    navigate("login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky">
        <div className="container-fluid mx-5">
          <a className="navbar-brand" href="#">
            <img src="../images/Logo.png" alt="" />
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
              <li className="nav-item mx-1">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#">
                  Connect
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/signup">
                  <button className="btn">Sign up</button>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <button>
                <p className="mt-2"> {userName.name}</p>
              </button>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#" onClick={logoutBtn}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
