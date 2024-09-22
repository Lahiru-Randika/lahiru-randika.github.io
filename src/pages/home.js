import { Link } from "react-router-dom";
import img1 from "../images/lahirunew.jpg"

const Home = ()=>{
    return(
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 left-section">
                        <div className="intro">
                            <p className="greeting">Hello! I am </p>
                            <h1 className="name anim-typewriter">Lahiru Randika</h1>
                            <h2>Computer Science Engineer | (UG)</h2>
                        </div>
                        <div className="intro-para">
                            <p>As a computer science student with a growing passion for <span>cybersecurity</span>, I’m learning the ropes 
                                of protecting the digital world.</p>
                        </div>
                        <div className="buttons d-flex align-items-center justify-content-center pb-4">
                            <Link to="/contactme"><button className="btn btn-round"><p className="hash">#</p>Contact Me</button></Link>
                            <a href="Lahiru-Randika-CV.pdf" download="Lahiru-Randika-CV.pdf"><button className="btn btn-round"><p className="hash">#</p>Download CV</button></a>
                        </div>
                        <div className="quote-box">
                            <p className="quote">``Great power comes with a great electricity bill``</p>
                            <p className="quote quote-by">~ mr Nobody</p>
                        </div>
                    </div>
                    <div className="col-md-5 right-section d-flex justify-content-center">
                        <div className="contain d-flex justify-content-center">
                            <div className="image">
                                <img src={img1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;