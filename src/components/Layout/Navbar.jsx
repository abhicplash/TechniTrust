import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCellphoneFill } from "react-icons/ri";

const Navbar = () => {
  const [view, setview] = useState(false);
  return (
    <div className="navbarContainer">
      <Link to={"/"}>
        <h1>TechniTrust</h1>
      </Link>
      <FaBarsStaggered
        className="navIcon"
        onClick={() => {
          setview(!view);
        }}
      />
      {view ? (
        <ul className="listmobile">
          <Link>
            <li>home</li>
          </Link>
          <Link>
            <li>About us</li>
          </Link>
          <Link>
            <li>Services</li>
          </Link>
          <Link>
            <li>Contact us</li>
          </Link>
        </ul>
      ) : null}
      <ul className="listDesk">
        <Link>
          <li>home</li>
        </Link>
        <Link>
          <li>About us</li>
        </Link>
        <Link>
          <li>Services</li>
        </Link>
        <Link>
          <li>Contact us</li>
        </Link>
      </ul>
      <div className="navContact">
        <RiCellphoneFill className="navContactIcon" />
        <span>+971-87654321</span>
      </div>
    </div>
  );
};

export default Navbar;
