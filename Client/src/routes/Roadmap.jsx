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
                        <Link className="btn btn-outline-light mx-3 my-3" to="/fs"
                        >Fullstack Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/devops"
                        >DevOps</Link>
                    </div>
                    < div className="row-md">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/andr"
                        >Android Development</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/pgs"
                        >PostgreSQL </Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/dsai"
                        >AI and Data Scientist Roadmap</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/bcd"
                        >Blockchain Development</Link>
                    </div>
                    <div className="row-lg">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/qa"
                        >QA</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/swarc"
                        >Software Architect</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/asp"
                        >ASP.NET Core</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/flut"
                        >Flutter</Link>
                    </div>
                    <div className="row-lg">
                        <Link className="btn btn-outline-light mx-3 my-3" to="/cbsec"
                        >Cyber Security</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/uxd"
                        >UX Design</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/rn"
                        >React Native</Link>
                        <Link className="btn btn-outline-light mx-3 my-3" to="/gd"
                        >Game Developer</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default roadmap