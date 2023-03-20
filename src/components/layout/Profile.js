import React, { useContext, useState } from 'react';
import SecondaryNav from '../Header/SecondaryNav';
import { AuthContext } from '../useContext/useContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
     <div>
        <SecondaryNav/>
           <div className="relative flex flex-col justify-center mt-6">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <form  className="mt-6">
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                             Your Name
                            </label>
                            <input
                            readOnly
                          
                                type="text"
                                placeholder={user?.displayName}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>              
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                            readOnly
                                name="email"
                                type="email"
                                placeholder={user?.email}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>              
                    </form>
                  
                    
            </div>
        </div>
     </div>
    );
};

export default Profile;