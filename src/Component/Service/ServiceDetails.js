import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = ({services}) => {
    // console.log(services);
    const navigate = useNavigate();
    const {name,price,img,description} = services;
    return (
        <div className='shadow-lg rounded-2xl w-[340px] h-[430px] bg-gray-200 p-4 text-center'>
        <div className="reviewrs  items-center justify-center mb-3 ">
        <img className='flex items-center rounded-3xl justify-center ' src={img} alt="" />
        <h1 className='text-2xl text-gray-600 px-3'>{name}</h1>
        <h1 className='text-2xl text-gray-600 px-3'>{price}</h1>
        <h3>{description}</h3>
            <button className='px-4 py-1 outline-0  bg-cyan-400 rounded-full' onClick={()=> navigate('/checkout')}>Checkout</button>
        </div>
     
    </div>
    );
};

export default ServiceDetails;