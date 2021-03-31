import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './augmenify_logo.png';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
            setNavbarLogo(true);
        }
        else {
            setNavbar(false);
            setNavbarLogo(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className={navbarLogo ? 'navbar-logo nav-active' : 'navbar-logo'} onClick={closeMobileMenu}>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar