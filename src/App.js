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
import RequireAuth from './Component/RequireAuth/RequireAuth';
import NotFound from './NotFound/NotFound';
import Footer from './Component/Footer/Footer';



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
         <Route path='/contact' element=
         {
           <RequireAuth>
             <Contact/>
           </RequireAuth>
         }/>
         <Route path='/checkout' element={
           <RequireAuth>
              <CheckOut/>
           </RequireAuth>
         } />
         <Route path='/about' element={<About/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='*' element={<NotFound/>} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
