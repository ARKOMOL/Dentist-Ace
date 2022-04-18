import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
     <div className='bg-slate-200'>
         <Banner/>
    </div>
      <Services/>
      <Testmonial/>
        </div>
    );
};

export default Home;