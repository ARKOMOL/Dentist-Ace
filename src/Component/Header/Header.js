import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <div className='sticky top-0 sm:flex sm:flex-auto bg-slate-200 px-12 py-8 flex justify-center md:justify-between'>
            <div className=' md:block'>
                <Link to='/' className='font-sans font bold sm:my-2 sm:text-3xl mr-12 text-gray-900'>
                    Dentist Ace
                </Link>
            </div>

            <div className="flex gap-4 lg:text-xl ">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/blogs">Blogs</CustomLink>

            <CustomLink to="/about">About</CustomLink>
            {
                    user ?
                    <button className='bg-sky-500 rounded-xl px-2 ' onClick={handleSignOut}>Signout</button>
                    :
                    <CustomLink to="/login">Login</CustomLink>}
            </div>
        </div>

        </div>
    );
};

export default Header;