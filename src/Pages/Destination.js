import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryNav from '../components/Header/PrimaryNav';
import Places from '../components/layout/Places';

const Destination = () => {
    const data = useLoaderData()
    return (
        <div className='bg-home bg-cover bg-center min-h-screen bg-no-repeat'>
        <PrimaryNav/>
        <div className='grid md:grid-cols-3 grid-cols-1'>
           {
                data.map(place=> <Places key={place.id} place={place}/>)
            }
        </div>
    </div>
    );
};

export default Destination;