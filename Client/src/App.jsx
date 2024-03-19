import React, { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import Navbaar from './Component/Navbar'
import Roadmap from './routes/Roadmap'
import About from './routes/About'
import ResetPassword from './routes/ResetPassword' 
import VerifyEmail from './routes/VerifyEmail'
import Mockinter from './routes/Mockinter'
import Errorpage from './routes/ErrorPage'  
import Interview from './routes/Interview'
import Ferm from './routes/Ferm'      
import Backend1 from './routes/Backend1'
import './App.css'

function App() {
  const [loader , setLoader] = useState(false);

  return (
    <div className="App">     
      <BrowserRouter>  
        <div id='main-content'> 
          <Navbaar/> 
          <Routes>   
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap/>}/>
            <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
            <Route path="/verify/:id/:token" element={<VerifyEmail />} />
            <Route path='/ai-inter' element={<Mockinter loader={loader} setLoader={setLoader} />}/>
            <Route path='/interview' element={<Interview/>} />
            <Route path='/ferm' element={<Ferm />} />
            <Route path='/backend1' element={<Backend1 />} />
            <Route path='*' element={<Errorpage />} />
            {/* <Route path="/dashboard" element={<Dashboard  />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
