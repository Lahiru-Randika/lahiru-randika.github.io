import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

const Home = ()=>{

    const [open, setOpen] = useState(false);

    const pressme = ()=>{
        if (open==true){
            setOpen(false);
        }else{
            setOpen(true);
        }
    }
    const closeme = ()=>{
        setOpen(false);
    }

    // const handleBackgroundClick = (e) => {
    //     if (e.target.className === "overlay") {
    //         closeme();
    //     }
    // };

    return(
        <div className="header">
            <div className="header-container d-flex align-items-center">
                <div className="logo">
                    <div className="image">
                        <h2><Link to="/">@LAHIRU</Link></h2>
                    </div>
                </div>
                <div className="links d-flex align-items-center ">
                    <div className="link_me menu">
                        <IoReorderThreeOutline className="three-lines" onClick={pressme}/>
                        {   
                            open &&
                            <>
                                <div className="open-links">
                                    <Link to="/" className="d-flex" onClick={closeme}>
                                        <div className="topcorner"></div>
                                        <p className="hash">#</p>Home
                                    </Link>
                                    <Link to="/projects" className="d-flex" onClick={closeme}>
                                        <div className="topcorner"></div>
                                        <p className="hash">#</p>Projects
                                    </Link>
                                    <Link to="/aboutme" className="d-flex" onClick={closeme}>
                                        <div className="topcorner"></div>
                                        <p className="hash">#</p>About Me
                                    </Link>
                                    <Link to="/contactme" className="d-flex" onClick={closeme}>
                                        <div className="topcorner"></div>
                                        <p className="hash">#</p>Contact Me
                                    </Link>
                                </div>
                            </>
                            }       
                        </div>
                    <div className="link_me">
                        <Link to="/" className="d-flex">
                            <p className="hash">#</p>Home
                        </Link>
                    </div>
                    <div className="link_me">
                        <Link to="/projects" className="d-flex">
                            <p className="hash">#</p>Projects
                        </Link>
                    </div>
                    <div className="link_me">
                        <Link to="/aboutme" className="d-flex">
                            <p className="hash">#</p>About Me
                        </Link>
                    </div>
                    <div className="link_me">
                        <Link to="/contactme" className="d-flex">
                            <p className="hash">#</p>Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;