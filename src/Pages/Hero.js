import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";



const Hero = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="md:flex justify-between items-center gap-16 md:px-20 px-10 mt-10">
      <div className=" text-white md:w-1/2">
        <h1 className="md:text-2xl text-xl mb-2 uppercase">Welcome to</h1>
        <h1 className="md:text-7xl text-3xl uppercase">Travel Guru</h1>
        <p className="py-4">Travel Guru is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh.</p>
        <Link to="/register">
        <button className="px-16 py-2 bg-purple-600 mt-5 rounded-md">Register Now</button>
        </Link>
      </div>

      <div className="relative bg-cover bg-center text-white md:mt-0 mt-10 md:w-1/2 mx-auto">
        <Slider {...settings}>
          {data.map((datas) =>
          
          (
           <Link key={datas.id} to={`booking/${datas.id}`}>
            <div  className="flex mx-auto relative">
              <div className="md:w-48 w-24 h-52 md:h-80 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={datas.image} alt="" />
                <div className="absolute md:inset-x-5 inset-x-2 bottom-5">
                  <p className="text-white font-bold md:text-xl">{datas.name}</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
              </div>
            </div>
           </Link>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default Hero;





