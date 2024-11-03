import React from "react";
import "./portfolio.css"; // Assuming you have a CSS file for styling
import Logo from "./images/logo.png";
import Info from "./images/linkedin.png";
import Info0 from "./images/gmail.png";
import MyAvatar from "./images/myAvatar.jpg";
import Proj1 from "./images/proj1.svg";
import Proj2 from "./images/proj2.svg";
import Brand from "./images/html.png";
import Brand0 from "./images/css.png";
import Brand1 from "./images/js.png";
import Brand2 from "./images/php.png";
import Brand3 from "./images/my.png";
import Brand4 from "./images/git.png";
import Brand5 from "./images/github.png";
import Brand6 from "./images/wp.png";
import Brand7 from "./images/flat.png";
import Brand8 from "./images/E.png";
import Brand9 from "./images/jq.png";
import Brand10 from "./images/fig.png";
import Brand11 from "./images/react.png";

const MyPortfolio = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="navbar">
                        <img src={Logo} alt="logo" className="logo" />
                        <ul className="nav-menu">
                            <li>
                                <a href="#about" className="nam">About Me</a>
                            </li>
                            <li>
                                <a href="#projects" className="nam">Projects</a>
                            </li>
                            <li>
                                <a href="#skills" className="nam">Skills</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section id="about">
                <div className="titlea">
                    <div className="text-column">
                        <h1>Hi! Roxanne here,</h1>
                        <p>
                            I'm a new web developer from the Philippines. I'm still working on<br></br>
                            strengthening my development talents. This is especially true for<br></br>
                            JavaScript. I practice this portfolio using ReactJS.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/roxanne-jimenez-461857194/" target="_blank" rel="noopener noreferrer">
                            <img src={Info} alt="LinkedIn" className="info" />
                        </a>
                        <a
                            href="https://github.com/lhaine29" target="_blank" rel="noopener noreferrer">
                            <img src={Brand5} alt="Github" className="info" />
                        </a>
                        <a
                            href="mailto:roxlhaine29@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={Info0} alt="Gmail" className="info" />
                        </a>
                    </div>
                    <img src={MyAvatar} alt="Avatar" className="avatar" />
                </div>
            </section>

            <section id="projects">
                <div className="title">
                    <h1>Projects</h1>
                    <p>Here are a few projects that I have built</p>
                </div>

                <div className="project-container">
                    <div className="project">
                        <img src={Proj1} alt="Proj1" className="proj1" />
                        <div className="project-details">
                            <p>
                                This project represents my thesis. I was responsible for creating the sidebar structure, managing patient records, and handling payment records. It is a web-based management system built with PHP, allowing users to perform CRUD operations for adding and updating information.<br></br>
                                The programming languages I used are:
                            </p>
                            <div className="bcontainer">
                                <img src={Brand} alt="html" className="brandp"></img>
                                <img src={Brand0} alt="css" className="brandp"></img>
                                <img src={Brand1} alt="js" className="brandp"></img>
                                <img src={Brand2} alt="php" className="brandph"></img>
                                <img src={Brand3} alt="mySQL" className="brandpj"></img>
                                <img src={Brand9} alt="jQuery" className="brandpj"></img>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-details">
                            <p>
                                "This project was part of my internship. I utilized Figma to design the layout and background, and during the development phase, I implemented WordPress along with the Elementor plugin to enhance its functionality."
                                <br />
                                The tools I used are:
                            </p>
                            <div className="bcontainer">
                                <img src={Brand10} alt="Figma" className="brandp"></img>
                                <img src={Brand6} alt="Wordpress" className="brandp"></img>
                                <img src={Brand8} alt="Elementor" className="brandp"></img>
                            </div>
                        </div>
                        <img src={Proj2} alt="Proj2" className="proj2" />
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="title">
                    <h1>Skills</h1>
                    <p>Here are the things I can do</p>
                </div>
                <div className="skill">
                    <ul>
                        <li>
                            <img src={Brand} alt="html" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand0} alt="css" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand1} alt="js" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand2} alt="php" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand3} alt="mySQL" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand4} alt="git" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand6} alt="Wordpress" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand7} alt="flatsome" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand8} alt="Elementor" className="brand"></img>
                        </li>
                        <li>
                            <img src={Brand10} alt="React Js" className="brand"></img>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default MyPortfolio;
