
import React, { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-router-dom'
import '../styles/Header.scss'
const Header = () => {
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <div className='header'>
            <Link to='/' className="logo link">
                <h1>Mobila.ro</h1>
            </Link>
            <nav ref={navRef}>
                   
                <Link to='/basic' className='orange link'>Shop</Link>
                <Link to='/about' className='orange2 link'>About</Link>
                <button className="navbtn nav-close-btn" onClick={showNav}>
                   <FaTimes/>
                </button>
                
            </nav>
            <button className="navbtn" onClick={showNav}>
                <FaBars />
            </button>
        </div>
    )
}

export default Header