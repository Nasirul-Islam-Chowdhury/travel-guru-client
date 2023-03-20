import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SecondaryNav from '../components/Header/SecondaryNav';
import Hotel from '../components/layout/Hotel';
import GoogleMap from './GoogleMap';

const Confirm = () => {
  const data = useLoaderData();
  const hotels = data.hotels;
  return (
    <div>
      <SecondaryNav />
      <div className='md:px-[160px] px-5'>
        <h1 className='text-2xl font-bold mb-5'>Stay in {data.name}</h1>
        <div className='md:flex justify-between items-center gap-10'>
          <div className=''>
            {hotels.map(hotel => <Hotel key={hotel.name} data={data} hotel={hotel} />)}
          </div>
          <div className=' flex'>
            <GoogleMap/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
