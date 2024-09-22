import { useState,useEffect } from "react";
import Direction from "../components/direction.js"
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { CiCircleRemove } from "react-icons/ci";
import ScrollReveal from 'scrollreveal';

import Spirals from "../components/spirals.js";

const AboutMe = ()=>{

    const [open, setOpen] = useState(false);

    const openMe = ()=>{
        setOpen(true);
    }
    const closeMe = ()=>{
        setOpen(false);
    }
    const handleOverlayClick = (e) => {
        if (e.target.className === 'background') {
          closeMe();
        }
    };

    useEffect(() => {
    ScrollReveal().reveal('.slide-in-bottom', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: false
    });
    }, []);

    return(
        <div className="aboutme projects">
            <div className="container">
                <Direction/>
                <div className="section">
                    <h1>Get to know <span>Me</span></h1>
                    <div className="row subsec">
                        <div className="info col-md 7">
                            <span>A dedicated and highly motivated
                      undergraduate student who is interested in the possibilities
                      of using my technical skills and passion for creativity in
                      a demanding and exciting workplace. Still a new beginner
                      with an endless thirst to learn the industry under different
                      conditions.
                            </span>
                            <div className="education">
                                <h3>Education</h3>
                                <ul className="list list-inline">
                                    <li>
                                        <p className="educenter">University of Moratuwa</p>
                                        <p className="para">I am currently pursuing a Computer Science and Engineering degree at the University of Moratuwa,
                                        with a focus on Cyber Security. While my studies are primarily centered around cybersecurity, I am in the early stages of 
                                        applying this knowledge to projects. My academic journey is equipping me with the foundational skills needed to excel in this critical field</p>
                                    </li>
                                    <li>
                                        <p className="educenter">Royal College</p>
                                        <p className="para">Royal College became my alma mater, where I developed a strong foundation in academics and nurtured my passion for technology. The guidance I received there helped 
                                        me achieve outstanding results in both my O-Levels and A-Levels.</p>
                                        <ul>
                                            <li>
                                                <span>Al</span>
                                                <span> 3As</span>
                                            </li>
                                            <li>
                                                <span>Ol</span>
                                                <span>8As 1B</span>
                                            </li>
                                        </ul>
                                        <div className="arrow">
                                            <button onClick={openMe}>Click Me</button>
                                            <PiArrowFatLinesLeftFill className="arrow-pointing"/>
                                            {
                                                open === true && 
                                                <div onClick={handleOverlayClick} className="background">
                                                    <div className="dialog">
                                                        <div className="header">
                                                            <h2>My Results</h2>
                                                            <p onClick={closeMe}><CiCircleRemove/></p>
                                                        </div>
                                                        <div className="exams row">
                                                            <div className="al col-md-6">
                                                                <div className="details">
                                                                    <h5 className="pb-2">#ALs</h5>
                                                                    <h6 className="pb-2">Sinhala Medium</h6>
                                                                    <ul className="list list-inline results-list">
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Physics</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Combined Maths</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Chemistry</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>English</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="ol al col-md-6">
                                                                <div className="details">
                                                                    <h5 className="pb-2">#OLs</h5>
                                                                    <h6 className="pb-2">Sinhala Medium</h6>
                                                                    <ul className="list list-inline results-list">
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Science</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Maths</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>English</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Sinhala</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>History</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Buddhism</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>Commerce</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>English Lit.</span>
                                                                        <span>B</span>
                                                                        </li>
                                                                        <li className="AlPopup pb-1">
                                                                        <span>ICT</span>
                                                                        <span>A</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="image col-md-5">
                            <Spirals/>
                        </div>
                    </div>
                </div>
                <div className="section certificates skills slide-in-bottom">
                    <h1><span>Skills; </span>that I can bring onto the table</h1>
                    <p className="quote">~ I'm not saying I’m perfect, but my code runs on the first try... sometimes</p>
                    <div className="cards">
                        <div className="set-1 mb-5 d-flex">
                            <div className="card">
                                <div className="intro">
                                    <h2><span className="hash">#</span>Language</h2>
                                    <ul>
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>C++</li>
                                        <li>C</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="intro long">
                                    <h2><span className="hash">#</span>Web Developing</h2>
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>JavaScript</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="intro">
                                    <h2><span className="hash">#</span>Other</h2>
                                    <ul>
                                        <li>WireShark</li>
                                        <li>Git</li>
                                        <li>Photoshop</li>
                                        <li>Canva</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default AboutMe;