import Direction from "../components/direction.js"
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const ContactMe = ()=>{
    return(
        <div className="contactme projects">
            <div className="container">
                <Direction/>
                <div className="section">
                    <h1>Lets discuss; <span>CONTACT ME</span></h1>
                    <div className="links mt-5">
                        <div className="contact mobile">
                            <FaSquarePhone className="icon"/>
                            (+94) 76 618 7964
                        </div>
                        <div className="contact email">
                            <MdEmail className="icon"/>
                            <a href="mailto:lahiru.21@cse.mrt.ac.lk?subject=Hello%20Lahiru&body=Write%20your%20message%20here" className="email-link">lahiru.21@cse.mrt.ac.lk</a>
                        </div>
                        <div className="contact github">
                            <FaGithubSquare className="icon"/>
                            <a href="https://github.com/Lahiru-Randika/">Github</a>
                        </div>
                        <div className="contact linkedin">
                            <IoLogoLinkedin className="icon"/>
                            <a href="https://www.linkedin.com/in/lahiru-randika-m/">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactMe;