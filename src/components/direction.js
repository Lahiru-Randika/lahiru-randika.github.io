import { useLocation } from 'react-router-dom';
import { PiSpiralFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdConnectWithoutContact } from "react-icons/md";

const Direction = ()=>{

    const location = useLocation(); 

    return(
        <div className="direction d-flex">
            <div className='part-1 d-flex align-items-center'>
                <p> You are in </p>
                <h2>{location.pathname.toUpperCase()}</h2>
            </div>
            <div className='part-2'>
                {
                    location.pathname === "/projects" && <GoProjectSymlink className='icon'/>
                }
                {
                    location.pathname === "/aboutme" && <CgProfile className='icon'/>
                }
                {
                    location.pathname === "/contactme" && <MdConnectWithoutContact className='icon'/>
                }
            </div>
        </div>
    )
}

export default Direction;