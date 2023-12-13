import { Link } from "react-router-dom";
import './NavBar'



const NavBar = () => {





return(
<nav>

<ul >

<li >
    <Link to="/" className="navbar-item">Home Page</Link>
</li>
<li>
    <Link to="/Registration">Registration</Link>
</li>


<li>
    <Link to="/DonorInfo">Donor </Link>
</li>




</ul>

</nav>
);
};

export default NavBar;