import React from 'react'
import '../css/Ferm.css'
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react'
import HTML from "../notes/HTML_Complete_Notes.pdf"
import CSS from "../notes/CSS.pdf"
import JAVASCRIPT from "../notes/JS.pdf"
// import { Link } from "react-router-dom"
export default function Ferm() {
    const frontends = ["Html", "Css", "JavaScript"]
    const frontPath = ["../routes/Android.jsx", "../routes/Android.jsx", "../routes/Android.jsx"]
    const [changer, setChanger] = useState(false);
    const [val, setval] = useState("");

    const Fileaccess = (val) => {
        setChanger(!changer)

        if (val === "JavaScript") {
            setval(JAVASCRIPT)
        } else if (val === "Css") {
            setval(CSS)
        } else if (val === "Html") {
            setval(HTML)
        }
    }

    return (
        <>
            <div className='container'>
                <div>
                    <h1>Frontend Development Roadmap</h1>
                </div>
                <div>
                    <h2 className='contentferm'><br />
                        Welcome to the exciting world of frontend development! As a frontend developer, you’ll be the architect of delightful user experiences, shaping how websites and applications look, feel, and interact. Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                        What Is Frontend Development?</h2>
                    <h2 className='contentferm'>
                        Frontend development is the art of creating the visual and interactive elements that users directly interact with. It’s where design meets code, where pixels come alive, and where user satisfaction thrives. Imagine building responsive layouts, crafting seamless animations, and ensuring accessibility for all.That’s the magic of frontend development!<br /></h2>

                    <h2 className='myconthead'>
                        Navigating the Roadmap
                    </h2>
                    <h2 className='fig1'></h2>
                    <h2>Our roadmap is divided into key areas, each representing a crucial aspect of frontend development. <br />
                        Buckle up as we explore!<br />
                    </h2>


                </div>
                <div className="grid-container">
                    <div class="grid-item">
                        <div class="card">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">HTML BASICS</h5>
                                <button class="card-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Learn to structure information using semantic HTML tags and start your development journey.</button>
                                <div class="collapse collapse-vertical" id="collapseExample">
                                    <div class="card card-body"  >
                                        {!changer ? <div className="d-flex justify-content-center">
                                            {frontends.map((val) => {
                                                return (
                                                    <div className="row-md">
                                                        <div className="card" onClick={() => Fileaccess(val)}>
                                                            <div className="container1">
                                                                <h3 className='con'><b>Learn {val} Basics</b></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                            :

                                            <div className='d-flex justify-content-center'>
                                                <div className='mx-2 mt-2'>
                                                    <button className='bt-html' onClick={() => setChanger(!changer)}><FaArrowLeft /></button>
                                                </div>

                                                <embed src={val} width={1000} height={1200} />
                                            </div>
                                        }
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div></div>
                            </div>

                        </div>
                    </div>
                    <div className="grid-item">
                        <div class="card">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">CSS</h5>
                                <p class="card-text">The stylistic wizardry. Dive into layouts, responsive design and CSS frameworks to style your webpage. </p>
                                {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div className="card-body">
                                <h5 className="card-title">Javascript</h5>
                                <p className="card-text">The dynamic powerhouse. Understand DOM manipulation, fetch data, and build interactive features.</p>
                                {/* <a href="https://www.google.com/"><b>Click here to Learn More</b></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div class="card">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">Frameworks</h5>
                                <p class="card-text"> React, Angular, Vue.js, Svelte—pick your weapon and build amazing UIs for your website.</p>
                                {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div class="card">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">CSS Preprocessors </h5>
                                <p class="card-text">Bored with basic CSS?<br />Use Sass, PostCSS, and more. Level up your styling game.</p>
                                {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div class="card">
                            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div class="card-body">
                                <h5 class="card-title">Git</h5>
                                <p class="card-text"> Continue your development journey,Git your code together! Explore Git,GitHub and collaboration workflows.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <h2 className='mycont'>  Remember, this roadmap isn’t a strict linear path. Feel free to explore, experiment, and specialize based on your interests.<br /></h2>

                <h2 className='mycont'>
                    Ready to embark on your frontend adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
                <h2 className='mycont'>
                    Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring frontend developers! </h2>
            </div>
        </>
    )
}