import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerImg from '../../assets/Group 1330.png'
import { AuthContext } from '../useContext/useContext';

const PrimaryNav = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
    }
    return (
        <nav className="w-full">
            <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-[135px]">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className='flex items-center justify-between gap-8'>
                            <div className='flex justify-between'>
                                <Link to="/">
                                    <img src={headerImg} className="lg:w-full  w-[80px]" alt="" />
                                </Link>
                            </div>
                            <div>
                                <input className='p-2 text-sm text-white md:w-[300px] rounded bg-transparent border-2' placeholder='Search your Destination...' type="text" />
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className=" items-center justify-center space-y-6 md:flex lg:space-x-12 md:space-x-4 md:space-y-0">
                            <li className="text-white font-semibold" style={{borderBottom:"2px"}}>
                                <NavLink to="/">
                                    Home
                                    </NavLink>
                            </li>
                            <li className="text-white font-semibold">
                                <NavLink to="/destination">Destination</NavLink>
                            </li>
                            {
                                user?.uid ?
                                    <>
                                        <li className="font-semibold text-white">
                                            <Link onClick={handleLogout} to='/'>Logout</Link>
                                        </li>
                                        <li className="text-white font-bold">
                                            <Link to='/profile'>{user?.displayName?.length > 10 ? user?.displayName.slice(0, 10) : user?.displayName}</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="font-semibold text-white">
                                            <Link to='/register'>Register</Link>
                                        </li>
                                        <li className=" px-4 py-1 rounded bg-purple-400 font-semibold">
                                            <Link to='/login'><button>SIGN IN</button></Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PrimaryNav;