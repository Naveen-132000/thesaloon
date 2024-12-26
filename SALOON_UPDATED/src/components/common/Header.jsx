import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="container-fluid" style={{ background: "linear-gradient(to right, #f8e2ff, #d0e4f7)" }}>
        <div className="row gx-0">
          <div className="col-lg-3" style={{ background: "linear-gradient(to right, #f8e2ff, #d0e4f7)" }}>
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
              style={{ color: "black" }} // Make "SALOON" text black
            >
              <h1 className="m-0 text-uppercase">Saloon</h1>
            </Link>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0" style={{ background: "linear-gradient(to right, #f8e2ff, #d0e4f7)" }}>
              <Link to="/" className="navbar-brand d-block d-lg-none" style={{ color: "black" }}>
                <h1 className="m-0 text-uppercase">Saloon</h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-end navbarCollapse"
                    : "collapse navbar-collapse justify-content-end"
                }
              >
                <div className="navbar-nav py-0">
                  {navList.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className="nav-link dropdown-toggle" style={{ color: "black" }}>
                            {item.text === "Rooms" ? "Testimonials" : item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub) => (
                              <Link to={sub.path} className="dropdown-item" style={{ color: "black" }}>
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link" style={{ color: "black" }}>
                          {item.text === "Rooms" ? "Testimonials" : item.text}
                        </Link>
                      )}
                    </div>
                  ))}
                  {/* Adding Blogs link */}
                  {/* <Link to="/blogs" className="nav-item nav-link" style={{ color: "black" }}>
                    Blogs
                  </Link> */}
                 
                 
                </div>
                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
