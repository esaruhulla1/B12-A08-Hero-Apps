import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import logoImg from '.././assets/logo.png'


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm  px-[2vw]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {/* link is here */}
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            
                            <NavLink to={'/allapps'}>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/installation'}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={'/'} className="text-[#8452ea] btn btn-ghost text-xl"><span><img className='max-w-8' src={logoImg} alt="" /></span> HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Links is here */}
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/allapps'}>Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/installation'}>Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/esaruhulla1" className='btn bg-[#7a42e9]  text-white'><span><img src={'/vector1.png'} alt="" /></span>Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;