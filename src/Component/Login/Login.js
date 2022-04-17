import React, { useReducer, useRef, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
    

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || '/';

    const navigate =useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    // let gFrom = location.state?.from?.pathname || '/';

 /*google login  */
//  const signInWithGoogle = () =>{
//      signInWithPopup(auth,googleProvider)
//      .then(result =>{
//          const user = result.user;
//          console.log(user);
//      })
  
//  }

    const emailRef = useRef('')
    const passRef = useRef('');

    // if (user) {
    //     navigate(from, {replace: true});
    // }
    if (user) {
        navigate(from,{replace:true})
    }
    if (gUser) {
        navigate(from,{replace:true})
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
        <div className='login-container '>
            <div>
                <h2 className='form-title text-center text-4xl'>Login</h2>
                <form className='login-form' onSubmit={handleUserSignIn}>
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
                    New to Dentist Ace? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <button  onClick={()=> signInWithGoogle()}> Google</button>

            </div>
        </div>
             
       <div className=' form-container1 '>
           <div className=' d-flex  text-white'>
           <span>--------------</span>
           <span>or</span>
           <span>--------------</span>
           </div>
    <div>
    </div>
       </div>
        </div>
    );
};

export default Login;