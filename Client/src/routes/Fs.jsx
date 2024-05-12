import React from 'react'
import '../css/Ferm.css'
import myimage from '../img/img6.jpg'
import { Link } from "react-router-dom"
export default function Fs() {
  return (
    <div>

        <div className='container my-1'>
      <h1>Fullstack Development Roadmap</h1></div>
      <div className='container'>
            <img src={myimage} alt="imgbg" className='img-fluid align-items-center mx myimgb'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                Let’s explore the world of full-stack development. As a full-stack developer, you’ll have the opportunity to create end-to-end solutions, from the user interface to the server-side logic. Whether you’re a beginner or aiming to enhance your existing skills.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is Fullstack Development?</h2>
                    <h2 className='contentferm'>
                    Full Stack Development refers to the art of building complete web applications from start to finish. As a full-stack developer, you wear multiple hats and possess a unique skill set that empowers you to handle both the front-end (client-side) and back-end (server-side) aspects of web applications.<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of Fullstack development. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid m-5'>
            <div className="container2">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">HTML, CSS and JavaScript</h5>
                            <Link class="card-text alpha" type="button" to="#" target="_blank">Learn the basics of HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript.</Link></div>
                            <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/notes/HTML.pdf" target="_blank">HTML</Link>
                            <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/notes/CSS_Complete_Notes.pdf" target="_blank">CSS</Link>
                            <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/notes/JS.pdf" target="_blank">JavaScript</Link></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Frameworks</h5>
                            <Link class="card-text alpha" type="button" to="https://builtin.com/articles/web-development-frameworks" target="_blank"> React, Angular, Vue.js, Svelte—pick your weapon and build amazing UIs for your website.</Link>
                           
                        </div>
                        <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://www.w3schools.com/REACT/" target="_blank">React</Link>
                            <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/https://www.w3schools.com/REACT/" target="_blank">Angular</Link>
                            <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/https://www.w3schools.com/VUE/" target="_blank">Vue.Js</Link>
                            <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/https://learn.svelte.dev/tutorial/welcome-to-svelte" target="_blank">Svelte</Link>
                    </div>
                </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                       
                        <div class="card-body">
                            <h5 class="card-title">Infrastructure and Automation</h5>
                            <h5 class="card-text alpha" type="button"> Dive into infrastructure as code using tools like Ansible and Terraform.Set up monitoring using tools like Monit.Deploy your applications.</h5>
                        </div>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.ansible.com/" target="_blank"
                        >Ansible</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://www.terraform.io/" target="_blank" 
                        >Terraform</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://mmonit.com/monit/" target="_blank"
                        >Monit</Link>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Front-End Development</h5>
                            <Link class="card-text alpha" type="button" to="/ferm">Dive into component-based architecture, state management, and routing.Explore responsive design and accessibility principles.</Link>
                            {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Back-End Development</h5>
                            <Link class="card-text alpha" type="button" to="/backend1">Choose a backend programming language.Learn about databases and Implement RESTful APIs and understand JWT authentication.</Link>
                         
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                        <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">DevOps </h5>
                            <Link class="card-text alpha" type="button" to="/devops">Familiarize yourself with Linux basics.Learn about essential AWS  services.<br></br>Explore containerization with Docker.</Link>
                          
                        </div>
                    </div>
                </div>
              
</div>
                </div>
              </div>
                <br></br>
                <div className='container'>
                <h2 className='mycont'>  Remember, this roadmap isn’t a strict linear path. Feel free to explore, experiment, and specialize based on your interests.<br /></h2>
              
<h2 className='mycont'>                
Ready to embark on your development adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring developers! </h2>
<br></br>

</div>
</div>           
  )
}