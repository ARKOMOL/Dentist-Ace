import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
     <div className='bg-slate-200'>
         <Banner/>
    </div>
      <Services/>
        </div>
    );
};

export default Home;