import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onOpenModal }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest('.nav__links') && !e.target.closest('.nav__burger')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="nav" id="nav">
            <div className="nav__inner">
                <a href="#" className="nav__logo">SCOTT.<span>WEBER</span></a>
                <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="navLinks">
                    <li><a href="#why" onClick={() => setIsOpen(false)}>Venue</a></li>
                    <li><a href="#floorplan" onClick={() => setIsOpen(false)}>Floor Plan</a></li>
                    <li><a href="#caps" onClick={() => setIsOpen(false)}>Capacities</a></li>
                    <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li className="nav__mobile-cta">
                        <button onClick={() => { setIsOpen(false); onOpenModal(); }}>Book Now</button>
                    </li>
                </ul>
                <button className="nav__cta" onClick={onOpenModal}>Book Now</button>
                <button className={`nav__burger ${isOpen ? 'active' : ''}`} id="burger" aria-label="Menu" onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
