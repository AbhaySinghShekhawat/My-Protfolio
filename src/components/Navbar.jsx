import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);
  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };
  const navItems = [
    {
      label: "Home",
      path: "#home",
      className: "nav-item active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      path: "#about",
      className: "nav-item",
    },
    {
      label: "Projects",
      path: "#projects",
      className: "nav-item",
    },
    {
      label: "Contact",
      path: "#contact",
      className: "md:!hidden hidden nav-item ",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, path, className, ref }, index) => (
        <a
          key={index}
          href={path}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
