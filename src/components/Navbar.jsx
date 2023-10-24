import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogoCreativeCommons } from "react-icons/bi";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarRight">
          <div className="logo">
            <BiLogoCreativeCommons />
          </div>
          <p className="para">SGK</p>
        </div>
        <div className="navbarCenter">
          <AiOutlineSearch className="reactIcons" />
          <input type="text" className="input" placeholder=" Your fave one " />
        </div>
        <div className="navbarLeft">
          <ul className="navbarList">
            <li className="navbarListItem">
              <a href="#">Home</a>
            </li>
            <li className="navbarListItem">
              <a href="#">About Me</a>
            </li>
            <li className="navbarListItem">
              <a href="#">Serveces</a>
            </li>
            <li className="navbarListItem">
              <a href="#">Contact Me</a>
            </li>
            <li className="navbarListItem">
              <a href="#">Read More</a>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
