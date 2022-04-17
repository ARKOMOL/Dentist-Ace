import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './Component/Header/Header';

import Blogs from './Component/Blog/Blogs';
import Home from './Component/Home/Home';
import Contact from './Component/Contacts/Contact';
import About from './Component/About/About';
import CheckOut from './Component/Checkout/CheckOut';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-200'>
      <Header/>
      </div>
      
{/* Route  */}

      <Routes>
         <Route path='/' element={<Home/>} ></Route>
         <Route path='/blogs' element={<Blogs/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/checkout' element={<CheckOut/>} />
         <Route path='/about' element={<About/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<SignUp/>}/>
      </Routes>

    </div>
  );
}

export default App;
