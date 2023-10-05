import { useState } from "react";
import { logo } from "../constants"
import { Link } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Link to="/" className="logo">
                <img alt="logo" src={logo.src} />
            </Link>
            <ul>
                {/* <Link to="/">  <li>Home</li></Link>
                <Link to="/about"> <li>About</li> </Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>Cart</li> */}
            </ul>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)} style={{ width: "100px" }}>Logout</button> : <button onClick={() => setIsLoggedIn(true)} style={{ width: "100px" }}>Login</button>}
        </div>
    )
}


export default Header;