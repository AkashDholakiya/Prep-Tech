import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'
import MyComponent from './slideshow';
import myimage from '../img/img2.jpg'
import img from '../img/img19.jpg'
const Home = () => {
  return (
    <div className='home'>
      <header>
        <h1 className='titl'>Prep-Tech Interview Preparation Hub</h1>
      </header>
      <section>
    
      <div className='container-lg align-items-center cont mx'>
     <div className='img-fluid align-items-center mx m-5'> <MyComponent />
     </div></div>
     <br></br>
     <div className='container con text-start'>
        <p>
      Welcome to PrepTech, One-stop solution for computer science students!</p></div>
     <div className='container con text-start my-4'>
      <p>
At PrepTech, we understand the challenges of studying computer science and preparing for a successful career in the tech industry.</p><br></br>
<h2 className='text-start fw-bolder '>Featured Content</h2>
        <h2 className='text-start fw-bolder'>Categories:</h2>
{/* <p>Comprehensive Notes: Our notes cover a wide range of computer science topics, from data structures and algorithms to machine learning and artificial intelligence. Our notes are designed to be easy to understand and provide a solid foundation for your studies.</p> */}
<p>
<b>Roadmaps:</b> Our roadmaps provide a clear path to success in computer science. Whether you're just starting out or looking to specialize in a particular area, our roadmaps will help you stay on track and reach your goals.</p><div className='container-lg'>
<Link to='/roadmap'>
        
<img src={myimage} alt="My Image" className=' img-fluid d-flex myimg'/></Link></div><br/>
<p><b>Interview System:</b> Our interview system is designed to help you prepare for technical interviews. We offer a range of practice questions, tips, and strategies to help you succeed.<div className='container-lg'>
<Link to='/interview'>
        
<img src={img} alt="My Image" className=' img-fluid d-flex myimg my-2'/></Link></div></p>
At PrepTech, we're committed to helping you succeed in computer science. Our resources are designed to be accessible and affordable, and we're always adding new content to help you stay up-to-date with the latest developments in the field.
<p>So why wait? Start exploring PrepTech today and take the first step towards a successful career in computer science!</p>  </div>  </section>
      
        
      <footer>
        <p>&copy; 2024 Interview Preparation Hub</p>
      </footer>
    </div>
  );
};

export default Home;
