import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import '../Login/Login.css'


const CheckOut = ({checkOut}) => {
    // console.log(checkOut);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleName = event =>{
        setName(event.target.value);
        console.log(event.target.value)
    }

    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handleAddress = event =>{
        setEmail(event.target.value);
    }
    const handlePhone = event =>{
        setPhone(event.target.value);
    }


   
    if(user){
        navigate('/');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        
      
    }

    return (
        <div className='login-container bg-info '>
            <div>
                <h2 className='form-title text-center text-3xl'>Checkout Page</h2>
                <form className='login-form' onSubmit={handleCreateUser}>
                    <div className="input-group">
                        
                        <input onBlur={handleName} type="name" name="name" placeholder='Name' id="" required/>
                    </div>
                   
                    <div className="input-group">
                       
                        <input onBlur={handleEmail} type="email" name="email"  placeholder='Email' id="" required/>
                    </div>
                   
                    <div className="input-group">
                       
                        <input onBlur={handleAddress} type="password" name="confirm-password" id=""  placeholder='Address' />
                    </div>
                    <div className="input-group">
                       
                        <input onBlur={handlePhone} type="text" name="phone" id=""  placeholder='Phone' />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Continue"  required/>
                </form>
              
            </div>
        </div>
    );
};

export default CheckOut;