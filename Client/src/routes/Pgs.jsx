import React,{useState} from 'react'
import "../css/Ferm.css"
import myimage from "../img/img9.jpg"
export default function PostG() {
  return (
    <div>
    <div>
      <h1 class='ttl'>PostgreSQL Roadmap</h1>
      </div>
      <div className='container'>
            <img src={myimage} alt="My Image" className='img-fluid align-items-center mx myimgb'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                    Have Knowledge about databases and how to use it? Let's learn about another Database, Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is PostgreSQL?</h2>
                    <h2 className='contentferm'>
                    PostgreSQL is an advanced, enterprise-class, and open-source relational database system
. It supports both SQL (relational) and JSON (non-relational) querying, making it a versatile choice for various applications
<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas which will help you learn. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid mx-5'>
            <div className="container2">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6 my-2">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Databases</h5>
                            <a class="card-text alpha" type="button" href="https://www.ibm.com/topics/relational-databases">Learn about basic Database structure and RDBMS concepts</a></div></div>
                    </div>
                    <div class="col-xl-4 col-md-6 my-2">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">SQL</h5>
                            
                            <a class="card-text alpha" type="button" href="https://www.w3schools.com/sql/">Learn SQL concepts and get to know how to operate the tables and schemas.</a>
                           
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 my-2">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">PostgreSQL Security Concepts</h5>
                            <a class="card-text alpha" type="button" href="https://www.timescale.com/learn/guide-to-postgresql-security" target="_blank">Read about different models and concepts in PostgreSQL Security</a>
                            
                        </div>
                    </div>
                </div>
               
                <div class="col-xl-4 col-md-6 my-2">
                    <div className="card">
                     
                        <div className="card-body">
                            <h5 className="card-title">Application Skills</h5>
                            <a class="card-text alpha" type="button" href="https://www.timescale.com/learn/guide-to-postgresql-security" target="_blank">Learn about migrations, practical patterns and antipatterns, and how to use migration tools like liquibase, sqitch, Bytebase, and ora2pg.
                            Learn about queues and practical patterns and antipatterns</a>
                            
                        </div>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://docs.liquibase.com/start/tutorials/home.html" target="_blank">Liquibase</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://medium.com/@james_mensch/database-source-control-versioning-and-environment-management-with-sqitch-b71b4a9067f0" target="_blank">Sqitch</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://www.bytebase.com/tutorial/" target="_blank">Bytebase</a>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 my-2">
                    <div className="card">
                     
                        <div className="card-body">
                            <h5 className="card-title">Advanced Topics</h5>
                            <a class="card-text alpha" type="button" href="https://docs.hydra.so/concepts/oltp-olap-and-htap" target="_blank">Learn about advanced SQL topics, including PL/pgSQL, triggers, aggregate and window functions, procedures and functions recursive CTE<br/>Understand fine-grained tuning, including per-user, per-database settings, storage parameters, and workload-dependent tuning for OLTP, OLAP, and HTAP</a>
                            
                        </div>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://www.kaggle.com/learn/advanced-sql" target="_blank">Advanced SQL</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://www.postgresqltutorial.com/postgresql-plpgsql/" target="_blank">PL/pg SQL</a>
                        
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 my-2">
                    <div className="card">
                     
                        <div className="card-body">
                            <h5 className="card-title">Troubleshooting Techniques</h5>
                            <a class="card-text alpha" type="button" href="https://www.cybertec-postgresql.com/en/how-to-interpret-postgresql-explain-analyze-output/" target="_blank">Learn how to analyze queries using EXPLAIN, Depesz, PEV2 and how to use troubleshooting methods like USE, RED, and Golden Signals<br/>Understand SQL optimization techniques, including indexes and their use cases, and how to identify and fix SQL query patterns and anti-patterns.<br/>Learn about schema design patterns and anti-patterns</a>
                            
                        </div>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://www.depesz.com/" target="_blank">Depesz</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://roadmap.sh/postgresql-dba/troubleshooting-techniques/query-analysis/pev20" target="_blank">PEV2</a>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 my-2">
                    <div className="card">
                     
                        <div className="card-body">
                            <h5 className="card-title">Infrastructure Skills</h5>
                            <a class="card-text alpha" type="button" href="/notes/PSIS.pdf" target="_blank">Learn about replication, including streaming replication and logical replication, and how to use pg_dump, pg_dumpall, pg_restore, and pg_basebackup for backup and recover</a>
                            
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
Ready to embark on your Learning Adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring developers! </h2></div>
    </div>
  )
}