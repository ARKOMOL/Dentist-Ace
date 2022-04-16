import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-200'>
      <Header/>
      <Banner/>
      </div>
{/* Route  */}

      <Routes>
         <Route></Route>
      </Routes>

    </div>
  );
}

export default App;
