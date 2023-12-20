import {Link} from "react-router-dom";

function Navbar()
{

    return (
        <nav>
         
            <Link to="/">
            Home 
            </Link>
            
            <Link to="/Projects">
             Projects
            </Link>

            <Link to="/About">
             About 
            </Link>
      
        </nav>
    )
}


export default Navbar;