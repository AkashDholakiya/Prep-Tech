import React from "react"
import { Link } from "react-router-dom"
import '../css/roadmap.css'

const roadmap = () => {
    return (
        <>
            <h1 className="my-4 ">ROADMAP</h1>
            <h2 className="rbr my-4">Role Based Roadmaps</h2>
            <div className="container1 brd m-5">
        
                <div className="col">
                    <div className="row-md">
                        <Link className="btn btn-outline-light mx-3 my-4 beta" to="/ferm"
                        >Frontend Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3 beta" to="/backend1"
                        >Backend Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3 beta" to="/fs"
                        >Fullstack Development</Link>
                       
                    </div>
                
                        <div className="row-lg">
                        <Link className="btn btn-outline-light mx-3 my-3 beta" to="/pgs"
                        >PostgreSQL </Link>
                        <Link className="btn btn-outline-light mx-3 my-3 " to="/dsai"
                        >AI and Data Scientist Roadmap</Link>
                       
                   
                    <Link className="btn btn-outline-light mx-3 my-3 beta" to="/bcd"
                        >Blockchain Development</Link>
                    {/* <Link className="btn btn-outline-light mx-3 my-4" to="/cbsec"
                        >Cyber Security</Link>
                          <Link className="btn btn-outline-light mx-3 my-3" to="/flut"
                        >Flutter</Link> 
                         */}
                         </div>
                         <div className="row-lg">
                       
                        <Link className="btn btn-outline-light mx-3 my-3 beta" to="/rn"
                        >React Native</Link>
    <Link className="btn btn-outline-light mx-3 my-3 beta" to="/devops"
                        >DevOps</Link>
                        <Link className="btn btn-outline-light mx-3 my-4 beta" to="/andr"
                        >Android Development</Link></div>
                    </div>
                   
                </div>
            
        </>
    )
}
export default roadmap