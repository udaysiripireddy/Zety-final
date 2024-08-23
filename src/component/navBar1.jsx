import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Resume from '../images/Home/nav/resume.png'
import CV from '../images/Home/nav/cv.png'
import About from '../images/Home/nav/about.png'
import Logo from '../images/Home/nav/zety.png'
function Navbar(){
    return<>
        <div className="nav-main">
            <div className="nav-left">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-right">
                <div className="right-left">

                    <div className="nav-item">
                        <a href="#">Resume</a>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <div className="hover-content">
                            <div className="nav-top">
                                <NavLink to="/" className="nav-top-img">
                                    <img src={Resume} alt="" />
                                </NavLink>
                                <NavLink to="/resume-builder" className="nav-top-text">
                                    <p className='nav-top-head'>Resume Builder</p>
                                    <p className='nav-top-line'>Create a Resume in 5 minutes. Get the job you want.</p>
                                </NavLink>
                            </div>
                            <hr />
                            <div className="nav-mid">
                                <NavLink to="/resume-templates" className="nav-mid-links">
                                    <div className="nav-mid-link-name">Resume Templates</div>
                                    <div className="nav-mid-link-text">Find the perfect template for you.</div>
                                </NavLink>
                                <NavLink to="/resume-example" className="nav-mid-links">
                                    <div className="nav-mid-link-name">Resume Example</div>
                                    <div className="nav-mid-link-text">See perfect resume examples that get you jobs.</div>
                                </NavLink>
                                <NavLink to="/resume-format" className="nav-mid-links">
                                    <div className="nav-mid-link-name">Resume Format</div>
                                    <div className="nav-mid-link-text">Pick the right resume format for your situation.</div>
                                </NavLink>
                                <NavLink to="/how-to-write-a-resume" className="nav-mid-links">
                                    <div className="nav-mid-link-name">How to Write a Resume</div>
                                    <div className="nav-mid-link-text">Learn how to make resume that gets interviews.</div>
                                </NavLink>
                                <NavLink to="/resume-checker" className="nav-mid-links">
                                    <div className="nav-mid-link-name">Resume Checker</div>
                                    <div className="nav-mid-link-text">Get your resume checked and scored with one click.</div>
                                </NavLink>
                                <NavLink to="/resume-help" className="nav-mid-links">
                                    <div className="nav-mid-link-name">Resume Help</div>
                                    <div className="nav-mid-link-text">Improve your resume with help from expert guides.</div>
                                </NavLink>
                            </div>
                            <div className='nav-bottom'>
                                <button>Create Your Resume Now</button>
                            </div>
                        </div>
                    </div>

                    {/* cv */}
                    <div className="nav-item">
                        <a href="#">CV</a>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <div className="hover-content">
                            <div className='nav-top'>
                            <div className="nav-top-img">
                                    {/* <img src={CV} alt="" /> */}
                                </div>
                                <NavLink to={"/cv-builder"} className="nav-top-text">
                                    <p className='nav-top-head'>CV Builder</p>
                                    <p className='nav-top-line'>Create a CV in 5 minutes. Get the job you want.</p>
                                </NavLink>
                            </div>
                            <hr />
                            <div className='nav-mid'>
                                <NavLink to={"/cv-templates"} className="nav-mid-links">
                                    <div className="nav-mid-link-name">CV Templates</div>
                                    <div className="nav-mid-link-text">Find the perfect CV template.</div>
                                </NavLink>
                                <NavLink to={"/cv-examples"} className="nav-mid-links">
                                    <div className="nav-mid-link-name">CV Examples</div>
                                    <div className="nav-mid-link-text">Find the perfect CV samples that gets you jobs.</div>
                                </NavLink>
                                <NavLink to={"/cv-format"} className="nav-mid-links">
                                    <div className="nav-mid-link-name">CV Format</div>
                                    <div className="nav-mid-link-text">Pick the right resume format for your situation.</div>
                                </NavLink>
                                <NavLink to={"/how-to-write-a-cv"} className="nav-mid-links">
                                    <div className="nav-mid-link-name">How to Write a CV</div>
                                    <div className="nav-mid-link-text">Learn how to make resume that gets interviews.</div>
                                </NavLink>
                                
                            </div>
                            <div className='nav-bottom'>
                                <button>Create Your CV Now</button>
                            </div>
                        </div>
                    </div>

                    {/* support */}
                    <div className="nav-item">
                        <a href="#">About</a>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <div className="hover-content">
                            <div className='nav-top'>
                            <div className="nav-top-img">
                                    {/* <img src={About} alt="" /> */}
                                </div>
                                <NavLink to={"/about"} className="nav-top-text">
                                    <p className='nav-top-head'>About</p>
                                    <p className='nav-top-line'>Find out more about Zety and its career experts.</p>
                                </NavLink>
                            </div>
                            <hr />
                            <div className='nav-mid'>
                                <NavLink to={"/contact"} className="nav-mid-links">
                                    <div className="nav-mid-link-name">Contact</div>
                                    <div className="nav-mid-link-text">Our customer service team is ready to help.</div>
                                </NavLink>
                                <NavLink to={"/editorial-guidelines"} className="nav-mid-links">
                                    <div className="nav-mid-link-name">Editorial Guidelines</div>
                                    <div className="nav-mid-link-text">Learn how our experts create our content.</div>
                                </NavLink>
                                <a className="nav-mid-links">
                                    <div className="nav-mid-link-name">Media Mentions</div>
                                    <div className="nav-mid-link-text">Discover where our work has been featured in.</div>
                                </a>
                            </div>
                            <div className='nav-bottom'>
                                <button>Create Your Resume Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-right">
                <button>My Account</button>
            </div>
        </div>
    </>
}
export default Navbar;