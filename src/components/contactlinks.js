import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useState } from "react";

const ContactSection = () => {

    const [open, setOpen] = useState(false);

    const openOrnot = () => {
        setOpen(prevOpen => !prevOpen); // Toggle the state correctly
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
                <Link to="#">
                    <FaGithub className="icon" />
                </Link>
                <Link to="#">
                    <FaLinkedin className="icon" />
                </Link>
                <Link to="#">
                    <MdMarkEmailUnread className="icon" />
                </Link>
            </div>
        </div>
    );
}

export default ContactSection;
