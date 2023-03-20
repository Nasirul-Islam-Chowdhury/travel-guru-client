import React, { useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import PrimaryNav from '../Header/PrimaryNav';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../assets/icons/calender_icon.png'


const Booking = () => {
    const data = useLoaderData();
    const date = new Date()
    const [startDatefirst, setStartDatefirst] = useState(date);
    const [startDatesecond, setStartDatesecond] = useState(date);
    return (
        <div className='bg-home bg-cover bg-center min-h-screen bg-no-repeat'>
            <PrimaryNav />
            <div className='md:px-32 px-5 md:flex justify-between gap-20 md:mt-20 mt-5'>
                <div className='text-white md:w-1/2 md:mb-0 mb-5'>
                    <h1 className=' font-bold text-6xl'>{data.name}</h1>
                    <p className='mt-5'>{data.details}</p>
                </div>
                <div className='md:w-1/3 bg-white p-5 rounded'>
                    <div className='mb-5'>
                        <p className='mb-2'>Origin</p>
                        <input placeholder="Your Location" className='w-full bg-slate-200 p-2' type="text" />
                    </div>
                    <div className='mb-5'>
                        <p className='mb-2'>Destination</p>
                        <input className='w-full font-bold bg-slate-200 p-2 placeholder:text-black' placeholder={data.name} type="text" readOnly />
                    </div>
                    <div className='flex justify-between gap-4 mb-5'>
                        <div>
                            <div>
                                <h1>From</h1>
                            </div>
                            <div className='px-2 bg-slate-200 rounded flex justify-start items-center'>
                                <div>

                                    <DatePicker
                                        selected={startDatefirst}
                                        minDate={new Date()}
                                        showYearDropdown
                                        className="text-black py-2 bg-slate-200 w-full font-semibold"
                                        onChange={(date) => setStartDatefirst(date)} />
                                </div>
                                <div>
                                    <img src={calendar} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1>To</h1>
                            </div>
                            <div className='px-2 bg-slate-200 rounded flex justify-start items-center'>
                                <div>

                                    <DatePicker
                                        selected={startDatesecond}
                                        minDate={new Date()}
                                        showYearDropdown

                                        className="text-black py-2 bg-slate-200 w-full font-semibold border-none"
                                        onChange={(date) => setStartDatesecond(date)} />
                                </div>
                                <div>
                                    <img src={calendar} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`confirm/${data.id}`}>
                        <button className='bg-purple-600 w-full py-2 rounded text-white font-bold mt-5'>Start Booking</button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default Booking;