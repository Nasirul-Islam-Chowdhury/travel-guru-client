import React from 'react';

const Hotel = ({ hotel }) => {
    console.log(hotel)
    return (
        <div className='flex justify-start gap-5 mb-5'>
            <div>
                <img className='w-[350px] md:h-[150px] h-full rounded' src={hotel.image} alt="" />
            </div>
            <div className='flex flex-col md:gap-1'>
                <h1 className='font-bold md:text-xl'>{hotel.name}</h1>
            <div className='flex justify-start gap-5'>
            <p>Guest: {hotel.guest}</p>
                <p>Room: {hotel.room}</p>
            </div>
                <h1>{hotel.details}</h1>
                <div className='md:flex justify-start gap-3'>
                    <h1>Review: 5 </h1>
                    <h1><span className='font-bold'>$52</span>/night  $137 total</h1>
                </div>
            </div>
        </div>
    );
};

export default Hotel;