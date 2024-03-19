import React from "react"
import { Link } from "react-router-dom"
import '../css/roadmap.css'
 
const roadmap = () => {
    return (
        <>
        <h1 className="my-4">ROADMAP</h1>
            <h2 className="rbr my-4">Role Based Roadmaps</h2>
            <div className="container1">
                <div className="col">
                    <div className="row-md">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Frontend Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/backend1"
                        >Backend Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Fullstack Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >DevOps</Link>
                    </div>
                    < div className="row-md">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Android Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/backend1"
                        >PostgreSQL </Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >AI and Data Scientist Roadmap</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Blockchain Development</Link>
                    </div>
                    <div className="row-lg">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >QA</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/backend1"
                        >Software Architect</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >ASP.NET Core</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Flutter</Link>
                    </div>
                    <div className="row-lg">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Cyber Security</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/backend1"
                        >UX Design</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >React Native</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/ferm"
                        >Game Developer</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default roadmap