import React, { useEffect } from "react";
import Direction from "../components/direction";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineAdsClick } from "react-icons/md";
import ScrollReveal from 'scrollreveal';

import img1 from "../images/shopily.jpeg";
import img2 from "../images/nanoprocessor.jpg";
import img3 from "../images/os.jpeg";
import img4 from "../images/certificate01.png";
import img5 from "../images/certificate02.png";
import img6 from "../images/certificate03.png";
import img7 from "../images/certificate04.png";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const CustomPrevArrow = (props) => (
    <div {...props} className="custom-prev-arrow">
      <IoIosArrowRoundBack className="prev-arrow-icon" />
    </div>
);
  
const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
      <IoIosArrowRoundForward className="next-arrow-icon" />
    </div>
);

const Projects = ()=>{

    var settings_for_projects = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
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
        <div className="projects">
            <div className="container">
                <Direction/>
                <div className="section">
                    <h1>What are my <span>PROJECTS?</span></h1>
                    <span>Code, coffee, and a few 'aha!' moments along the way
                    </span>
                    <div className="slider">
                        <Slider {...settings_for_projects}>
                            <div className="d-flex sliderSet">
                                <img src={img1}/>
                                <div className="description">
                                    <h5>#Shopily</h5>
                                    <span>
                                    Shopily is a comprehensive online marketplace that integrates a wide array of physical supermarkets, grocery stores, 
                                    and specialty shops into a single, user-friendly platform. It offers customers the convenience of browsing and shopping 
                                    from multiple retailers all in one place. With Shopily, you can easily find and purchase your desired goods while also discovering the exact locations of 
                                    products within participating stores. This seamless experience not only saves time but also ensures that you can quickly locate and obtain the items you need.<br/>
                                    (Still under constuctions..)<br/>
                                        <a href="https://github.com/Lahiru-Randika/Shopily"><button className="btn-round">Open the project in GitHub ~~~ </button></a>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex sliderSet">
                                <img src={img2}/>
                                <div className="description">
                                    <h5>#NanoProcessor</h5>
                                    <span>
                                    In this project, we designed and implemented a 4-bit nano processor using VHDL. The project involved coding a range of fundamental components and basic instructions to create a functional microprocessor. 
                                    This included developing essential elements such as the ALU (a very basic one), instruction decoders, etc. as well as integrating them to ensure the processor could execute simple instructions effectively. 
                                    The design highlights our ability to work with hardware description languages and understand processor architecture at a fundamental level.<br/>
                                    This was a group project and my team member was Pamudu Nayanga<br/>
                                    <a href="https://github.com/Lahiru-Randika/Nano-Processor"><button className="btn-round">Open the project in GitHub ~~~ </button></a>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex sliderSet">
                                <img src={img3}/>
                                <div className="description">
                                    <h5>#PintOS</h5>
                                    <span>
                                    In this project, we contributed to the development of the Pintos operating system, focusing on implementing key components and functionalities. Our work involved coding and integrating several essential parts of the OS, 
                                    allowing it to execute basic commands such as whoami and more. This project 
                                    provided hands-on experience in operating system design and implementation, deepening our understanding of fundamental OS principles.<br/>
                                    <a href="https://github.com/Lahiru-Randika/PintOS/"><button className="btn-round">Open the project in GitHub ~~~ </button></a>
                                    </span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="section certificates slide-in-bottom">
                    <h1>Take a look into my <span>CERTIFICATES</span></h1>
                    <span>Learning is my superpower, and these certificates are my ticket to new adventures!</span>
                    <div className="cards">
                        <div className="set-1 mb-5 d-flex">
                            <div className="card">
                                <div className="intro">
                                    <h2>Career Essentials in Cybersecurity</h2>
                                    <h4><span className="hash">#</span>by Microsoft and LinkedIn</h4>
                                </div>
                                <img src={img4}/>
                                <a href="https://www.linkedin.com/learning/certificates/c52650e03eb22bcb10f0c370ad184b0957a2f55308002a655dfe32d1e402fd94">
                                    <button className="OpentheProject"><MdOutlineAdsClick/>Show Credentials</button>
                                </a>
                            </div>
                            <div className="card">
                                <div className="intro">
                                    <h2>Cyber Security Foundation</h2>
                                    <h4><span className="hash">#</span>by LinkedIn</h4>
                                </div>
                                <img src={img5}/>
                                <a href="https://www.linkedin.com/learning/certificates/d95cabd1d2b08a0a8bf9362a7db76598ddc9ee624f6f36b70935f8ff4deebc8b?trk=share_certificate">
                                    <button className="OpentheProject"><MdOutlineAdsClick/>Show Credentials</button>
                                </a>
                            </div>
                            <div className="card">
                                <div className="intro">
                                    <h2>JavaScript for Beginners</h2>
                                    <h4><span className="hash">#</span>by Simplilearn</h4>
                                </div>
                                <img src={img6}/>
                                <a href="https://simpli-web.app.link/e/pTM4cjIdCMb">
                                    <button className="OpentheProject"><MdOutlineAdsClick/>Show  Credentials</button>
                                </a>
                            </div>
                        </div>
                        <div className="set-1 set-2 d-flex set-2">
                            <div className="card">
                                <div className="intro">
                                    <h2>Phishing Email Job simulation</h2>
                                    <h4><span className="hash">#</span>by Forage and Mastercard</h4>
                                </div>
                                <img src={img7}/>
                                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_ZY3L4GTK7JMcco937_1726434043570_completion_certificate.pdf">
                                    <button className="OpentheProject"><MdOutlineAdsClick/>Show  Credentials</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;