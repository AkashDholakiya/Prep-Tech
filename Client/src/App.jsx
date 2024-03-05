import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import Navbaar from './Component/Navbar'
// import Footer from './Component/Footer'
import Roadmap from './routes/Roadmap'
import About from './routes/About'
import ResetPassword from './routes/ResetPassword' 
import VerifyEmail from './routes/VerifyEmail'
import Signup from './routes/Signup'
import Login from './routes/Login'
import ForgotPass from './routes/ForgotPass'
// import Dashboard from './Component/Dashboard'
import Errorpage from './routes/ErrorPage'  
// import Profile from './routes/Profile' 
import './App.css'
import Ferm from './routes/Ferm'      
import Backend1 from './routes/Backend1'
function App() {
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
            <Route path="/errorpage" element={<Errorpage />} />
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/login' element={<Login />} />
            <Route path='/forget-password' element={<ForgotPass />} />
            <Route path='/roadmap' element={<Roadmap />} />
            <Route path='/ferm' element={<Ferm />} />
            <Route path='/backend1' element={<Backend1 />} />
            {/* <Route path="/dashboard" element={<Dashboard  />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
          {/* <Footer/> */}
      </BrowserRouter> 
    </div>
  );
}

export default App;
