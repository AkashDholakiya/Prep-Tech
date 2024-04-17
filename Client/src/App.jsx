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
import Qa from './routes/Qa'
import SWarc from './routes/Swarc'
import ASPnet from './routes/Asp'
import Flut from './routes/Flut'
import Csec from './routes/Cbs'
import UXdesign from './routes/Usx'
import P2PInter from './routes/P2PInter'
import ReactN from './routes/Rn'
import GameDev from './routes/GameDev' 

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
            <Route path='/interview' element={<Interview/>} />
            <Route path='/interview/ai-inter' element={<Mockinter loader={loader} setLoader={setLoader} />}/>
            <Route path='/interview/p2p-inter' element={<P2PInter />}/>
            <Route path='/ferm' element={<Ferm />} />
            <Route path='/backend1' element={<Backend1 />} />
            <Route path='/fs' element={<Fs/>} />
            <Route path='/devops' element={<Dops/>} />
            <Route path='/andr' element={<Androiddev/>}/>
            <Route path='/pgs' element={<PostG/>}/>
            <Route path='/dsai' element={<DsAi/>}/>
            <Route path='/bcd' element={<Bcd/>}/>
            <Route path='/swarc' element={<SWarc/>}/>
            <Route path='/asp' element={<ASPnet/>}/>
            <Route path='/flut' element={<Flut/>}/>
            <Route path='/cbsec' element={<Csec/>}/>
            <Route path='/rn' element={<ReactN/>}/>
            <Route path='/uxd' element={<UXdesign/>}/>
            <Route path='/gd' element={<GameDev/>}/>
            <Route path='/qa' element={<Qa/>}/>
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
