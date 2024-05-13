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
import Fs from './routes/Fs'
import Dops from './routes/Dops'
import Androiddev from './routes/Andriod'
import PostG from './routes/Pgs'
import DsAi from './routes/Ai'
import Bcd from './routes/Blockchaindev'
import P2PInter from './routes/P2PInter'
import ReactN from './routes/Rn'

import './App.css'

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">     
      <BrowserRouter>  
        <div id='main-content'> 
          <Navbaar show={show} setShow={setShow}/>
          <Routes>   
            <Route path="/" element={<Home show={show} setShow={setShow} />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap/>}/>
            <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
            <Route path="/verify/:id/:token" element={<VerifyEmail />} />
            <Route path='/interview' element={<Interview/>} />
            <Route path='/interview/ai-inter' element={<Mockinter />}/>
            <Route path='/interview/p2p-inter' element={<P2PInter />}/>
            <Route path='/ferm' element={<Ferm />} />
            <Route path='/backend1' element={<Backend1 />} />
            <Route path='/fs' element={<Fs/>} />
            <Route path='/devops' element={<Dops/>} />
            <Route path='/andr' element={<Androiddev/>}/>
            <Route path='/pgs' element={<PostG/>}/>
            <Route path='/dsai' element={<DsAi/>}/>
            <Route path='/bcd' element={<Bcd/>}/>
            <Route path='/rn' element={<ReactN/>}/>
            <Route path='*' element={<Errorpage />} />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
