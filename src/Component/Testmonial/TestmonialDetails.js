import React from 'react';

const TestmonialDetails = ({testmonial}) => {
    // console.log(testmonial);
    const {name,ratings,description} = testmonial;
    return (
        <div className='shadow-lg rounded-2xl w-[340px] h-[250px] bg-gray-200 p-4 text-center'>
        <div className="reviewrs  items-center justify-center mb-3 ">
            
        <h1 className='text-2xl text-gray-600 px-3'>{name}</h1>
        <h1 className='text-xl text-gray-600 px-3'>{ratings}</h1>
        <h3>{description}</h3>
            
        </div>
        </div>
    );
};

export default TestmonialDetails;