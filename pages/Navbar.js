import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div style={{
                        backgroundColor: '#247f9e',
                    }} className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul style={{
                            backgroundColor: '#247f9e',
                        }} tabIndex={0} className="menu menu-compact dropdown-content mt-6 rounded-sm w-72">

                            <li><a className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center ">Screenshots</a></li>

                            <li tabIndex={0}>
                                <a className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center my-2">Download App</a>
                            </li>

                            <li><a className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center">About Us</a></li>

                            <li><a className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm flex justify-center mt-2">Contact Us</a></li>

                        </ul>
                    </div>

                    <a className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm">Free fire</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a style={{
                            borderRadius:'3px'
                        }} className=" cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white">Screenshots</a></li>
                        
                        <li tabIndex={0}>
                            <a style={{
                            borderRadius:'3px'
                        }} className=" cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white">Download App</a>
                        </li>

                        <li><a style={{
                            borderRadius:'3px'
                        }} className=" cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white">About us</a></li>

                        <li><a style={{
                            borderRadius:'3px'
                        }} className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="cursor-pointer btn-sm text-white normal-case text-xl border-0 hover:text-black hover:bg-white rounded-sm">Download App</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;