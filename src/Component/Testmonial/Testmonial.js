import React from 'react';
import useTestmonial from '../Hooks/useTestmonial';
import TestmonialDetails from './TestmonialDetails';

const Testmonial = () => {
    const [testmonial,setTestmonial] = useTestmonial([]);
    return (
        <div>
            
            <h1 className='text-4xl text-center mt-10 '>
                WHAT PEOPLE SAY 
            </h1>
            <div className="services-part grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center mt-5 "> 
            
            {
                testmonial.map(testmoni =>(<TestmonialDetails  key={testmoni.id} testmonial={testmoni}/>))
            }
            </div>
        </div>
    );
};

export default Testmonial;