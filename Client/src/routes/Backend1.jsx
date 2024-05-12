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
            <img src={myimage} alt="My Image" className='img-fluid align-items-center mx myimgb'></img>
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
                     <h2 className='fig1'></h2>
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
                            <Link class="card-text alpha" type="button" >Master languages like Node.js, Python, Ruby, and Java. Understand their ecosystems and best practices for clean, efficient code.</Link></div><a className="btn btn-outline-light m-3 alpha card-text" href="/notes/Python.pdf" target="_blank"
                        >Python</a>
                         <a className="btn btn-outline-light m-3 alpha card-text" href="/notes/JAVA.pdf" target="_blank" to="/ferm"
                        >Java</a>
                         <a className="btn btn-outline-light m-3  alpha card-text" href="https://www.w3schools.com/nodejs/" target="_blank" to="/ferm"
                        >Node.JS</a>
                        <a className="btn btn-outline-light m-3 alpha card-text" href="https://www.ruby-lang.org/en/documentation/" target="_blank" to="/ferm"
                        >Ruby</a></div>
                    </div>
                  
               
                    <div class="col-xl-3 col-md-6 m-3">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">SQL Databases</h5>
                            <a class="card-text alpha" type="button" href="https://www.ibm.com/topics/relational-databases" target="_blank">Learn to design robust databases with SQL solutions. Manage data transactions and optimize performance for scalability.</a>
                        </div><a className="btn btn-outline-light m-3 alpha card-text" href="/notes/MySQl.pdf" target="_blank"
                        >MySQL</a>
                         <a className="btn btn-outline-light m-3 alpha card-text" href="https://www.mariadbtutorial.com/" target="_blank"
                        >MariaDB</a>
                         <a className="btn btn-outline-light m-3  alpha card-text" href="https://learn.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver15" target="_blank" 
                        >MS SQL</a>
                        <a className="btn btn-outline-light m-3 alpha card-text" href="https://www.youtube.com/watch?v=ObbNGhcxXJA" target="_blank" to="/ferm"
                        >Oracle</a>
                          <Link className="btn btn-outline-light m-3 alpha card-text" href="#" target="_blank" to="/pgs"
                        >PostgreSQL</Link>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 m-3">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">NoSQL Databases</h5>
                            <a class="card-text alpha" type="button" href="https://www.ibm.com/topics/relational-databases" target="_blank">Learn to Manage data transactions and optimize performance for scalability.</a>
                        </div><a className="btn btn-outline-light m-3 alpha card-text" href="https://www.mongodb.com/docs/" target="_blank"
                        >MongoDB</a>
                         <a className="btn btn-outline-light m-3 alpha card-text" href="https://www.influxdata.com/time-series-database/" target="_blank"
                        >InfluxDB</a>
                         <a className="btn btn-outline-light m-3  alpha card-text" href="https://neo4j.com/docs/getting-started/get-started-with-neo4j/graph-database/" target="_blank" 
                        >Neo4j</a>
                        <a className="btn btn-outline-light m-3 alpha card-text" href="https://cassandra.apache.org/_/index.html" target="_blank"
                        >Cassandra</a>
                    </div>
                </div>
                <div class="col-xl-3 col-md- m-3">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">APIs and Middleware </h5>
                            <a class="card-text alpha" href="https://www.ibm.com/topics/api" target="_blank" type="button"> Develop RESTful APIs and understand middleware’s role in request handling. Ensure secure data exchange between the server and clients.</a>
                            {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                      
                    </div>
                </div>
                
                </div>
                {/* <div class="col-xl-3 col-md-6 m-2">
                    <div className="row-md">
                        
                    </div>
                
                        
                </div> */}
                 <div class="col-xl-3 col-md-6 m-3">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Repo Hosting Services</h5>
                            <button className="card-text"> Learn about the services which help developers know about issue tracking, code review, and continuous integration features.</button>
                       
                        </div>
                        <a className="btn btn-outline-light m-3 alpha card-text" href="https://www.w3schools.com/git/git_intro.asp?remote=github" target="_blank"
                        >Github</a>
                         <a className="btn btn-outline-light m-3  alpha card-text" href="https://about.gitlab.com/" target="_blank" 
                        >Gitlab</a>
                        <a className="btn btn-outline-light m-3 alpha card-text" href="https://bitbucket.org/product/guides/getting-started/overview" target="_blank"
                        >BitBucket</a>
                    </div>
                    
                </div>
                
              
                <div class="col-xl-3 col-md-6 m-3">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Server Management</h5>
                            <button className="card-text"> Get comfortable with server setup, configuration, and deployment. Explore cloud services like AWS, Azure, and Google Cloud.</button>
                            {/* <a href="https://www.google.com/"><b>Click here to Learn More</b></a> */}
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