"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import styles from "./Intro.module.css";
import Sachin from "../../images/sachin.png";
import data from "./data";

const Intro = () => {
  return (
    <>
      <div className={styles.intro_wrapper} id="intro">
        {/* Content starts */}
        <div className={styles.intro_content}>
          <div className={styles.my_name}>
            <h1>Hy!, I Am</h1>
            <span>Sachin Pradhan</span>
          </div>
          <div className={styles.skill_box}>
            <h3> Fullstack Developer: </h3>
            <div className={styles.word}>
              <span> Web Site Developer</span>
              <span>Web Site Designer</span>
              <span>Android/IOS Developer</span>
              <span>UI/UX Designer</span>
            </div>
          </div>

          {/* Button  */}
          <div className={styles.intro_buttons}>
            <Link to="contact" smooth={true} spy={true}>
              <button className={styles.button}>Contact Me</button>
            </Link>
            {/* <Link to="projects" smooth={true} spy={true}>
            <button className={styles.button}>My Work</button>
          </Link> */}
          </div>
        </div>
        {/* social icons  */}
        <div className={styles.social_icons}>
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="nooperner noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* Images  */}
        <div className={styles.image_box}>
          <div className={styles.image_content}>
            <Image src={Sachin} alt="Sachin" width={350} />
          </div>
        </div>
      </div>
      {/* Responsive html*/}
      <div className={styles.intro_wrapper2} id="intro">
        {/* Images  for Responsive*/}
        <div className={styles.image_box2}>
          <div className={styles.image_content2}>
            <Image src={Sachin} alt="Sachin" width={200} />
          </div>
        </div>
        {/* Content starts */}
        <div className={styles.intro_content2}>
          <div className={styles.my_name2}>
            <h1>Hy!, I Am</h1>
            <span>Sachin Pradhan</span>
          </div>
          <div className={styles.skill_box2}>
            <h3> Fullstack Developer: </h3>
            <div className={styles.word2}>
              <span> Web Site Developer</span>
              <span>Web Site Designer</span>
              <span>Android/IOS Developer</span>
              <span>UI/UX Designer</span>
            </div>
          </div>

          {/* Button  */}
          <div className={styles.intro_buttons2}>
            <Link to="contact" smooth={true} spy={true}>
              <button className={styles.button2}>Contact Me</button>
            </Link>
            {/* <Link to="projects" smooth={true} spy={true}>
          <button className={styles.button}>My Work</button>
        </Link> */}
          </div>
        </div>
        {/* social icons  */}
        <div className={styles.social_icons2}>
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="nooperner noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Intro;
