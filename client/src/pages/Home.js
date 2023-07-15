import React from "react";
import "../stylesheets/Home.css";
import logo from "../images/logo (2).jpeg";
import Footer from "./Footer";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-my static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex">
              <img src={logo} alt="..." height={36} />{" "}
              <p className="mx-3 my-1 fw-bold">Let's Endorse</p>
            </div>
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <div>
        <div className="container">
          <div className="row d-flex justify-content-between my-5">
            <div className="  col-md-4">
              <div className="card p-5 pr-md-0 text-left bg-14">
                <h1 className="mb-3">Farmer</h1>
                <h4 className="mb-3">A portal for Farmers</h4>
                <a
                  className="btn btn-primary btn-light-dark"
                  href
                  role="button"
                >
                  <h4>
                    <Link to="/farmer/login">Login</Link>{" "}
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 pl-md-0 text-left bg-23 ">
                <h1 className="mb-3">MFE</h1>
                <h4 className="mb-3">A portal for the people working in MFE</h4>
                <a
                  className="btn btn-primary btn-light-dark"
                  href
                  role="button"
                >
                  <h4>
                    <Link to="/mfe/login">Login</Link>{" "}
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero */}

        {/* Second container for cards */}
        <div className="container">
          <div className=" row d-flex justify-content-between my-5">
            <div className="col-md-4">
              <div className="card p-5 pl-md-0 text-left bg-23 ">
                <h1 className="mb-3">PAC</h1>
                <h4 className="mb-3">A portal for the people working in PAC</h4>
                <a
                  className="btn btn-primary btn-light-dark"
                  href
                  role="button"
                >
                  <h4>
                    <Link to="/pac/login">Login</Link>{" "}
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 pr-md-0 text-left bg-14 ">
                <h1 className="mb-3">CPC</h1>
                <h4 className="mb-3">A portal for the people working in CPC</h4>
                <a
                  className="btn btn-primary btn-light-dark"
                  href
                  role="button"
                >
                  <h4>
                    <Link to="/cpc/login">Login</Link>{" "}
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
