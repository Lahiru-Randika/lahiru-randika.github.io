import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState } from "react";

const ContactSection = () => {

    const [open, setOpen] = useState(false);

    const openOrnot = () => {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <div className={`${open ? "clicked" : ""} contactsection`} >
            <div className="vertical-line"></div>
            <div className={`${open ? "openmylinks" : ""} arrow-down`} onClick={openOrnot}>
                {
                    open ? 
                    <FaArrowAltCircleUp className="arrow-img" />
                    :
                    <FaArrowAltCircleDown className="arrow-img" />
                }
            </div>
            <div className={`link-pic d-flex ${open ? "show" : ""}`}>
                <a href="https://github.com/Lahiru-Randika/">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/lahiru-randika-m/">
                    <FaLinkedin className="icon" />
                </a>
                <a href="mailto:lahiru.21@cse.mrt.ac.lk?subject=Hello%20Lahiru&body=Write%20your%20message%20here">
                    <MdMarkEmailUnread className="icon" />
                </a>
            </div>
        </div>
    );
}

export default ContactSection;
