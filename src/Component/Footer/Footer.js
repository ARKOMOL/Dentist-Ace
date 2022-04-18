import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-300 mb-0 w-full py-8 mt-8'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className=' text-center justify-between md:flex lg:flex lg:mx-auto md:mx-auto'>
          <div>
            <h1 className='text-2xl'>
              Dentist Ace
            </h1>
            <p>Dentist Ace is best dental service in this area.You can contact with us</p>
          </div>
      <div>
      <h1 className='text-2xl mx-3 my-2'>
           Our Services
         </h1>
         <p>
           Root Canal
         </p>
         <p>
           Alignment Teeth 
         </p>
         <p>Cosmetic Teeth</p>
         <p>Oral Hyginee</p>
        <p>Live Advisory</p>
        
      </div>
      <div>
        <h1 className='text-2xl'>Contact Us</h1>
        <h3 className='text-xl'>
          wireless gate, <br /> Mohakhali,Dhaka,1212.
        </h3>
        <h3 className='text-xl'>
          01869564298 <br />
          01945657835
        </h3>
      </div>
        </div>
        <div className='text-center text-cyan-600 pt-10 sm:pt-12 font-light flex items-center justify-center'>
          All Rights Reserved By &copy; Dentist Ace | 2022
        </div>
      </div>
    </footer>
  )
}

export default Footer
