import React from "react";
import "./index.scss"
function Navbar() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar_logo">
                <h1>Logo</h1>
            </div>
            <ul className="navbar_links">
                <li className="navbar_link">
                    <a href="/">Home</a>
                </li>
                <li className="navbar_link">
                    <a href="/">About</a>
                </li>
                <li className="navbar_link">
                    <a href="/">Tours</a>
                </li>
            </ul>
        </nav>
    </>
    )
}
export default Navbar;