import React from 'react'
import '../css/Ferm.css'
import { Link } from "react-router-dom"
export default function Ferm() {
  return (
    <>
      <div>
        <h1>Frontend Development Roadmap</h1>
      </div>
      <div className="col">
        <div className="row-md">
          <div className="card">
            <div className="container1"><Link className="btn1" to="www.w3schools.com"
            ><b>Learn HTML Basics</b></Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
