import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { Button } from '../Button/Button'
import { IconContext } from 'react-icons/lib'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton)

    useEffect(() => {
        showButton()
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' onClick={closeMobileMenu} className="navbar-logo">
                            <MdFingerprint className="navbar-icon" />
                        Lavish
                    </Link>
                        <div onClick={handleClick} className="menu-icon">
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links">
                                    Home
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links">
                                    Services
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={closeMobileMenu} className="nav-links">
                                    Products
                            </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link className="btn-link">
                                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                                    </Link>
                                ) : (
                                        <Link className="btn-link">
                                            <Button buttonStyle="btn--outline" onClick={closeMobileMenu} buttonSize="btn--mobile">Sign Up</Button>
                                        </Link>

                                    )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
