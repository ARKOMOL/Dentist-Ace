import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-slate-200 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font bold text-xl text-grey-600'>
                    Dentist Ace
                </Link>
            </div>

            <div className="flex gap-4 text-xl">
            <CustomLink to="/">Home</CustomLink>
            {/* <CustomLink to="/serivices">Services</CustomLink> */}
            <CustomLink to="/blogs">Blogs</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;