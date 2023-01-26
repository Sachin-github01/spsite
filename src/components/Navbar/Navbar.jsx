"use client"; // this is a client component
import React, { useState } from "react";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar_wrapper}>
      {/* Logo  */}
      <div className={styles.logo}>
        <Link to="intro" activeClass="active" spy={true} smooth={true}>
          <span>SP</span>
        </Link>
      </div>
      {/* ********** navigation menulist ********* */}
      <div className={styles.navbar_menulist}>
        <ul>
          <li>
            <Link to="intro" activeClass="active" spy={true} smooth={true}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="about" activeClass="active" spy={true} smooth={true}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="services" activeClass="active" spy={true} smooth={true}>
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="projects" activeClass="active" spy={true} smooth={true}>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="skill" activeClass="active" spy={true} smooth={true}>
              <span>Experience</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* contact and toggle section  */}
      <div className={styles.contact_toggle}>
        <ul>
          <li>
            <Link to="contact" activeClass="active" spy={true} smooth={true}>
              <span className={styles.contact}>Contact</span>
            </Link>
          </li>
          <li>
            <span>
              <Toggle />
            </span>
          </li>
        </ul>
      </div>
      {/* *********** hamburger section ********* */}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      {/* ********  menu list ******** */}
      <div
        className={styles.menu_list}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <ul>
          <li>
            <Link
              to="intro"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setOpen(false)}
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setOpen(false)}
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setOpen(false)}
            >
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setOpen(false)}
            >
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setOpen(false)}
            >
              <span>Skill</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
