import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";
import { useQuote } from "../QuoteContext";
function Menubar() {
  const { quoteItemsCount } = useQuote();

  return (
    <header>
      <nav className="mx-auto w-75 navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand me-auto" href="/logo">
            <img width={90} height={70} src="http://www.girirajtrading.in/assets/img/logo.png" alt="" />
          </Link>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Giriraj Trading
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link isactive mx-lg-2"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2" to="/About">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/product"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Another action
                      </Link>
                    </li>
                    
                    <li>
                      <Link className="dropdown-item" to="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2" to="/services">
                    Service
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/quotes" className="Quote-button">
  Get Quotes
  {quoteItemsCount > 0 && (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {quoteItemsCount}
      <span className="visually-hidden">unread messages</span>
    </span>
  )}
</Link>

          <button
            className="navbar-toggler pe-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Menubar;
