import Container from 'react-bootstrap/Container';
import {Nav,Navbar, Offcanvas} from 'react-bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Signup from '../routes/Signup';
import Login from '../routes/Login';
import ForgotPass from '../routes/ForgotPass';
import '../css/nav_style.css'
import { useState } from 'react';

function Navbaar() {
  const [show, setShow] = useState(false);
  const [showsignup,setshowsignup] = useState(true); 
  const [showlogin,setshowlogin] = useState(false); 
  const [showforgot,setshowforgot] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addthis = { color: 'white' }
  const nullstate = { color: '#949494' }
  const navigate = useNavigate()

  const handlelogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/')
    window.location.reload();
  }

  const location = useLocation()

  const linkstyle = {
    color: '#949494',
    textDecoration: 'none',
    marginLeft: '20px'
  }

  const Navstyle = {
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" variant='dark' style={Navstyle}>
        <Container>
          <div>
            <Link to='/' className='main_img'>Prep Tech</Link>
          </div>
          <Nav>
            <Link to='/about' style={{ ...linkstyle, ...location.pathname === '/about' ? addthis : nullstate }}>About</Link>
            <Link to='/roadmap' style={{ ...linkstyle, ...location.pathname === '/roadmap' ? addthis : nullstate }}>Roadmap</Link>
            <Link to='/ai-inter' style={{ ...linkstyle, ...location.pathname === '/ai-inter' ? addthis : nullstate }}>Ai-Mock-Interview</Link>
          </Nav>
          <Nav>
            {!localStorage.getItem('token') ? 
            <>
            <Link style={linkstyle} onClick={handleShow}>Sign up</Link>
            <Offcanvas show={show} onHide={handleClose} placement='end' >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  {showsignup ? "Sign up" : showlogin ? "Login" : "Forgot Password"}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {showsignup && <Signup setshowlogin={setshowlogin} setshowsignup={setshowsignup} />}
                {showlogin && <Login setshowforgot={setshowforgot} setshowlogin={setshowlogin} setshowsignup={setshowsignup} />}
                {showforgot && <ForgotPass setshowsignup={setshowsignup} setshowforgot={setshowforgot} />}
              </Offcanvas.Body>
            </Offcanvas>
            </>
           : <Link style={linkstyle} onClick={handlelogout}>Logout</Link>}
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;