import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/logo.jpg';

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
];

function Header() {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        
    })

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Brownfim</Link>
                </div>
                <ul className="header__nav">
                    {headerNav.map((e, index) => (
                        <li
                            key={index}
                            className={`${index === active ? 'active' : ''}`}
                        >
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
