import React from 'react';
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-white max-w-6xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-sm font-bold md:text-lg">CS-Ticket System</a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 text-black hidden lg:flex">
                    {links}
                </ul>
                <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-sm font-medium hover:opacity-90 transition-all duration-300"><FaPlus />
                New Ticket</a>
            </div>
        </div>
    );
};

export default Navbar;