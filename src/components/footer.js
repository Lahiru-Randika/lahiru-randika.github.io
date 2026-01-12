import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer =() =>{
    return(
        <div className="footer">
            <div className="footer-container d-flex">
                <div className="section-left">
                    <h4>@ Lahiru Randika</h4>
                    <p>All Rights Reserved @LAHIRU RANDIKA</p>
                </div>
                <div className="final-links">
                    <p>lahiru.21@cse.mrt.ac.lk</p>
                    <p>Computer Science Engineering (UG)</p>
                    <p>Focusing Cyber Security</p>
                    <div className="icons">
                        <Link to="https://github.com/Lahiru-Randika/">
                            <FaGithub  className="icon"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/lahiru-randika-m/">
                            <FaLinkedin className="icon"/>
                        </Link>
                        <Link to="mailto:lahiru.21@cse.mrt.ac.lk?subject=Hello%20Lahiru&body=Write%20your%20message%20here">
                            <MdMarkEmailUnread className="icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;