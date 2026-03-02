import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark py-3 fixed-top ${
        location.pathname === "/" && !scrolled
        ? "bg-transparent"
        : "bg-dark shadow-sm"
        }`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Franklin Digital Studio
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"} to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                    Portfolio
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"} to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"}>
                    Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;