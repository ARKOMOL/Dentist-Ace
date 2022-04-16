import React from 'react';
import banner from '../images/baner.jpg'
const Banner = () => {
    return (
        <div className='container mx-auto  flex flex-row '>
            <div className="banner-text px-8">
                <h3 className='text-2xl pb-4 text-sky-400'>
                    WELCOME TO DENTIST ACE 
                </h3>
                <h1 className='text-5xl font-bold'>
                    The Best <br /> Dental Service
                </h1>
                <p className='text-xl pt-3'>
                    Looking for a Dentist in Your local area.I am providing you a high range of general and dental services near you.
                </p>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;