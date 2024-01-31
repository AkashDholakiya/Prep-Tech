import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import MainImg from '../images/Prep-Tech.svg'
import '../css/nav_style.css'

function Navbaar() {
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
  const path = location.pathname
  if (localStorage.getItem('username') && (path === '/signup' || path === '/login' || path === '/forget-password' || path === '/reset-password/:id/:token' || path === '/verify/:id/:token')) {
    navigate('/')
  }

  const linkstyle = {
    color: '#949494',
    textDecoration: 'none',
    marginLeft: '20px'
  }

  const Navstyle= {
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
              <Link to='/about' style={{...linkstyle,...location.pathname === '/about' ? addthis : nullstate}}>About</Link>
              <Link to='/roadmap' style={{...linkstyle,...location.pathname === '/roadmap' ? addthis : nullstate}}>Roadmap</Link>
            </Nav>
            <Nav>
              {!localStorage.getItem('token') ? <Link to='/signup' style={{...linkstyle,...location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/forget-password' ? addthis : nullstate}}>Sign up</Link> : <Link style={linkstyle} onClick={handlelogout}>Logout</Link>}
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbaar;