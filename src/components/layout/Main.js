import React,{useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../../Pages/Hero';
import PrimaryNav from '../Header/PrimaryNav';
import './Main.css'

const Main = () => {
    const data = useLoaderData();
    return (
        <div className='bg-home bg-cover bg-center min-h-screen bg-no-repeat'>
            <PrimaryNav/>
            <Hero data={data}/>
        </div>
    );
};

export default Main;