import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../assets/Group 1330 (1).png'
import { AuthContext } from '../useContext/useContext';

const SecondaryNav = () => {
    const [navbar, setNavbar] = useState(false);
    const {user,logOut} = useContext(AuthContext)
    const handleLogout = ()=>{
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
                        <img src={headerImg} className="md:w-[120px] w-[80px]" alt="" />
                    </Link>
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
                                    className="w-6 h-6"
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
                                    className="w-6 h-6 "
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
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className=" items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0">
                        <li className=" font-semibold">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="font-semibold">
                            <Link>Destination</Link>
                        </li>
                 
        
                        {
                            user?.uid?
                            <>
                             <li className="font-semibold">
                            <Link onClick={handleLogout} to='/'>Logout</Link>
                        </li>
                             <li className="font-bold">
                            <Link to='/profile'>{user?.displayName.slice(0,10)}</Link>
                        </li>
                           </>
                           :
                           <>
                           <li className="font-semibold ">
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

export default SecondaryNav;