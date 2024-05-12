import React,{useState} from 'react'
import '../css/Ferm.css'
import myimage from '../img/img4.jpg'
import { Link } from 'react-router-dom'
export default function Ferm() {
   
    return (
        <>
 
<div className='container'>
            <div>
                <h1>Frontend Development Roadmap</h1>
            </div>
            <div className='container'>
            <img src={myimage} alt="imgbg" className='img-fluid align-items-center mx myimgf'/>
            </div>
            <div>
                <h2 className='contentferm '><br/>
                    Welcome to the exciting world of frontend development! As a frontend developer, you’ll be the architect of delightful user experiences, shaping how websites and applications look, feel, and interact. Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is Frontend Development?</h2>
                    <h2 className='contentferm'>
                    Frontend development is the art of creating the visual and interactive elements that users directly interact with. It’s where design meets code, where pixels come alive, and where user satisfaction thrives. Imagine building responsive layouts, crafting seamless animations, and ensuring accessibility for all.That’s the magic of frontend development!<br/></h2>
                   <br/>
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of frontend development. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-'>
            <div className="container2">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        
                        <div class="card-body">
                            <h5 class="card-title">HTML BASICS</h5>
                            <Link class="card-text alpha" type="button" to="/notes/HTML.pdf" target="_blank">Learn to structure information using semantic HTML tags and start your development journey.</Link></div></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">CSS</h5>
                            <Link class="card-text alpha" type="button" to="/notes/CSS_Complete_Notes.pdf" target="_blank">The stylistic wizardry. Dive into layouts, responsive design and CSS frameworks to style your webpage. </Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Javascript</h5>
                            <Link class="card-text alpha" type="button" to="/notes/JS.pdf" target="_blank">The dynamic powerhouse. Understand DOM manipulation, fetch data, and build interactive features.</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="row align-items-start">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Frameworks</h5>
                            <Link class="card-text alpha" type="button" to="https://builtin.com/articles/web-development-frameworks" target="_blank"> React, Angular, Vue.js, Svelte pick your weapon and build amazing UIs for your website.</Link>
                        </div>
                    </div>
                </div>
               <div class="col-xl-4 col-md-6">
                        <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">CSS Preprocessors </h5>
                            <Link class="card-text alpha" type="button" to="https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor" target="_blank">Bored with basic CSS?<br/>Use Sass, PostCSS, and more. Level up your styling game.</Link>
                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Git</h5>
                            <Link class="card-text alpha" type="button" to="https://www.w3schools.com/git/git_intro.asp?remote=github" target="_blank"> Continue your development journey,Git your code together! Explore Git,GitHub and collaboration workflows.</Link>
                        </div>
                        </div>
                    </div>
                </div>
</div>
                </div>
              </div>
                <br></br>
                <h2 className='mycont'>  Remember, this roadmap isn’t a strict linear path. Feel free to explore, experiment, and specialize based on your interests.<br /></h2>
              
<h2 className='mycont'>                
Ready to embark on your frontend adventure? Let’s dive in!</h2><h2 className='fig1'>👨🏼‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring frontend developers! </h2>
</div>        
        </>
    )
}
