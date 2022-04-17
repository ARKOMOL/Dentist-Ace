import React, { useReducer, useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from '../Login/google.webp'
import auth from '../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


 /*google login  */
 const signInWithGoogle = () =>{
     signInWithPopup(auth,googleProvider)
     .then(result =>{
         const user = result.user;
         console.log(user);
     })
  
 }


    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }

    // const handlePasswordBlur = event => {
    //     setPassword(event.target.value);
    // }
    const emailRef = useRef('')
    const passRef = useRef('');

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
        <div className='form-container '>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group ms-5">
                        <input ref={emailRef} type="email" name="email" placeholder='Email' id="" required />
                    </div>
                    <div className="input-group ms-5">
                        
                        <input ref={passRef} type="password" name="password" placeholder='Password' id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                   
                    <input className='form-submit ms-5 bg-info' type="submit" value="Login" />
                </form>
        
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
             
       <div className=' form-container1 '>
           <div className=' d-flex  text-white'>
           <span>--------------</span>
           <span>or</span>
           <span>--------------</span>
           </div>
    <div>
    <button> <Link to='' className=''>  <img  onClick={signInWithGoogle} className='' style={{width:50}}  src={logo} alt="" /></Link> Google</button>
    </div>
       </div>
        </div>
    );
};

export default Login;