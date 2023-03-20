import React from 'react';
import SecondaryNav from '../Header/SecondaryNav';
import {Outlet} from 'react-router-dom';


const Third = () => {
    return (
        <div>
            <SecondaryNav/>
            <Outlet/>
        </div>
    );
};

export default Third;