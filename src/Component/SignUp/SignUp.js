import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';


const SignUp = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleName = event =>{
        setName(event.target.value);
        console.log(event.target.value)
    }
    const handleLastName = event =>{
        setLastName(event.target.value);
        console.log(event.target.value)
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container bg-info '>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        
                        <input onBlur={handleName} type="name" name="name" placeholder='Name' id="" required/>
                    </div>
                    <div className="input-group">
                        
                        <input onBlur={handleLastName} type="name"  placeholder='Last Name'name="name" id="" required/>
                    </div>
                    <div className="input-group">
                       
                        <input onBlur={handleEmailBlur} type="email" name="email"  placeholder='Email' id="" required/>
                    </div>
                    <div className="input-group">
                      
                        <input onBlur={handlePasswordBlur} type="password" name="password"  placeholder='Password' id=""  required/>
                    </div>
                    <div className="input-group">
                       
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id=""  placeholder='Confirm Password' />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;