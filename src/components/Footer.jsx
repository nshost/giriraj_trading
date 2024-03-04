import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <footer className="vw-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
              <Link className="navbar-brand me-auto" href="/logo">
            <img width={100} height={100} src="http://www.girirajtrading.in/assets/img/logo.png" alt="" />
          </Link>
                <p className="small text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="small text-white mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a className="text-primary" href="#">
                    Bootstrapious.com
                  </a>
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <NavLink to="/Home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <NavLink href="/">FAQ</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Products</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      id="button-addon2"
                      type="button"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;