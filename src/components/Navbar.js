import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);


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

    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className={navbarLogo ? 'navbar-logo nav-active' : 'navbar-logo'} onClick={closeMobileMenu}>
                        <img src={process.env.PUBLIC_URL + '/images/augmenify_logo.png'} alt="Logo" />
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
                        <li className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link className='nav-links' onClick={closeMobileMenu}>
                                Services<i className='fas fa-caret-down ico' />
                            </Link>
                            {dropdown && <Dropdown />}

                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>
                        <Link to='/contact' className='btn' onClick={closeMobileMenu}>Contact Us</Link>
                    </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
