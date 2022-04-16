import React from 'react';

const ServiceDetails = ({services,handleAddToCheckout}) => {
    // console.log(services);
    const {name,price,img,description} = services;
    return (
        <div className='shadow-lg rounded-2xl w-[340px] h-[430px] bg-white p-4 text-center'>
        <div className="reviewrs  items-center justify-center mb-3 ">
        <img className='flex items-center rounded-3xl justify-center ' src={img} alt="" />
        <h1 className='text-2xl text-gray-600 px-3'>{name}</h1>
        <h1 className='text-2xl text-gray-600 px-3'>{price}</h1>
        <h3>{description}</h3>
        <button onClick={()=> handleAddToCheckout(services)}>Checkout</button>
        </div>
     
    </div>
    );
};

export default ServiceDetails;