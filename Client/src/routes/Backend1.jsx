import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Ferm.css'
import myimage from '../img/img5.jpg'


export default function Backend1() {
  return (
    
           <>
  
<div className='container'>
            <div>
                <h1>Backend Development Roadmap</h1>
            </div>
            <div className='container'>
            <img src={myimage} alt="My Img" className='img-fluid align-items-center mx myimgb'></img>
            </div>
            <div>
                <h2 className='contentferm'><br/>
                Welcome to the thrilling world of backend development! As a backend developer, you are the backbone of web applications, responsible for server-side logic, database management, and application integration. Whether you’re beginning your journey or advancing your expertise, this roadmap will navigate you through the vital skills and technologies you need to become proficient.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is Backend Development?</h2>
                    <h2 className='contentferm'>
                    Backend development focuses on the server side of web applications. It involves creating and maintaining the technology that powers the frontend, ensuring seamless data processing, and providing APIs for the frontend to interact with. Think of it as the brain behind the scenes, making sure everything runs smoothly and efficiently.<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                    <h2 className='content1 text-start'>Our roadmap is divided into key areas, each representing a crucial aspect of backend development. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid mx'>
            <div className="container2">
            <div className="row align-items-start gx-1">
                <div class="col-xl-3 col-md-6 m-3">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Programming Languages</h5>
                            <Link class="card-text alpha" type="button" >Master languages like Node.js, Python, Ruby, and Java. Understand their ecosystems and best practices for clean, efficient code.</Link></div><Link className="btn btn-outline-light m-3 alpha card-text" to="/notes/Python.pdf" target="_blank"
                        >Python</Link>
                         <Link className="btn btn-outline-light m-3 alpha card-text" to="/notes/JAVA.pdf" target="_blank" 
                        >Java</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://www.w3schools.com/nodejs/" target="_blank" 
                        >Node.JS</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.ruby-lang.org/en/documentation/" target="_blank" 
                        >Ruby</Link></div>
                    </div>
                  
               
                    <div class="col-xl-3 col-md-6 m-3">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">SQL Databases</h5>
                            <Link class="card-text alpha" type="button" to="https://www.ibm.com/topics/relational-databases" target="_blank">Learn to design robust databases with SQL solutions. Manage data transactions and optimize performance for scalability.</Link>
                        </div><Link className="btn btn-outline-light m-3 alpha card-text" to="/notes/MySQl.pdf" target="_blank"
                        >MySQL</Link>
                         <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.mariadbtutorial.com/" target="_blank"
                        >MariaDB</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://learn.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver15" target="_blank" 
                        >MS SQL</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.youtube.com/watch?v=ObbNGhcxXJA" target="_blank" 
                        >Oracle</Link>
                          <Link className="btn btn-outline-light m-3 alpha card-text"  target="_blank" to="/pgs"
                        >PostgreSQL</Link>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 m-3">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">NoSQL Databases</h5>
                            <Link class="card-text alpha" type="button" to="https://www.ibm.com/topics/relational-databases" target="_blank">Learn to Manage data transactions and optimize performance for scalability.</Link>
                        </div><Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.mongodb.com/docs/" target="_blank"
                        >MongoDB</Link>
                         <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.influxdata.com/time-series-database/" target="_blank"
                        >InfluxDB</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://neo4j.com/docs/getting-started/get-started-with-neo4j/graph-database/" target="_blank" 
                        >Neo4j</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://cassandra.apache.org/_/index.html" target="_blank"
                        >Cassandra</Link>
                    </div>
                </div>
                <div class="col-xl-3 col-md- m-3">
                    <div class="card">
                       
                        <div class="card-body">
                            <h5 class="card-title">APIs and Middleware </h5>
                            <Link class="card-text alpha" to="https://www.ibm.com/topics/api" target="_blank" type="button"> Develop RESTful APIs and understand middleware’s role in request handling. Ensure secure data exchange between the server and clients.</Link>
                    </div>
                </div>
                
                </div>
                
                 <div class="col-xl-3 col-md-6 m-3">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Repo Hosting Services</h5>
                            <button className="card-text"> Learn about the services which help developers know about issue tracking, code review, and continuous integration features.</button>
                       
                        </div>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.w3schools.com/git/git_intro.asp?remote=github" target="_blank"
                        >Github</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://about.gitlab.com/" target="_blank" 
                        >Gitlab</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://bitbucket.org/product/guides/getting-started/overview" target="_blank"
                        >BitBucket</Link>
                    </div>
                    
                </div>
                
              
                <div class="col-xl-3 col-md-6 m-3">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Server Management</h5>
                            <button className="card-text"> Get comfortable with server setup, configuration, and deployment. Explore cloud services like AWS, Azure, and Google Cloud.</button>
                        </div>
                    </div>
                </div>
               
</div>
                </div>
              </div>
                <br></br>
           
              
<h2 className='mycont'>                
Remember, this roadmap is not a strict sequence.Feel free to explore topics in any order and focus on areas that interest you the most. Ready to start your backend adventure?Let’s get coding!</h2><h2 className='fig1'>👨🏼‍💻</h2>

</div>        
        </>
         )
}