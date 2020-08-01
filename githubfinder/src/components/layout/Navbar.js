import React from 'react'
import { Link } from 'react-router-dom';

const Navbar=({icon, title})=> {
        return (
            <nav className="navbar bg-dark">
                <Link to="/">
                    <h1>
                        <i className={icon}></i>
                        {title}
                    </h1>
                </Link>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
    Navbar.defaultProps={
        title: " GitHub Finder",
        icon: "fab fa-github"
    }

export default Navbar;

