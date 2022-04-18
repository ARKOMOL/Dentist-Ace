import React, { useState } from 'react';
import CheckOut from '../Checkout/CheckOut';
import useServices from '../Hooks/useServices';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    const [checkOut,setCheckOut] =useState([]);
    const [service,setService] =useServices([]);
    // console.log(serivce);


    return (
        <div>
            <h1 className='text-3xl text-center'>
                My Services
            </h1 >
            <h1 className='text-4xl text-center'>
                What I Provide 
            </h1>

            <div className="services-part grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5 ">
          
          {
              service.map(services =>(<ServiceDetails key={services.id} services ={services} ></ServiceDetails>))
          }

            </div>
           
        </div>
    );
};

export default Services;