import React,{useState} from 'react'
import "../css/Ferm.css"
import myimage from "../img/img15.png"

export default function Csec() {
  return (
    <div>
      <h1>Cyber Security Roadmap</h1>
      <div className='container'>
            <img src={myimage} alt="My Image" className='img-fluid align-items-center mx myimgai'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                    Welcome to the exciting world of frontend development! As a frontend developer, you’ll be the architect of delightful user experiences, shaping how websites and applications look, feel, and interact. Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is Frontend Development?</h2>
                    <h2 className='contentferm'>
                    Frontend development is the art of creating the visual and interactive elements that users directly interact with. It’s where design meets code, where pixels come alive, and where user satisfaction thrives. Imagine building responsive layouts, crafting seamless animations, and ensuring accessibility for all.That’s the magic of frontend development!<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of frontend development. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid'>
            <div className="container2">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">HTML BASICS</h5>
                            <button class="card-text" type="button">Learn to structure information using semantic HTML tags and start your development journey.</button></div></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">CSS</h5>
                            <p class="card-text">The stylistic wizardry. Dive into layouts, responsive design and CSS frameworks to style your webpage. </p>
                            {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Javascript</h5>
                            <p className="card-text">The dynamic powerhouse. Understand DOM manipulation, fetch data, and build interactive features.</p>
                            {/* <a href="https://www.google.com/"><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
                <div className="row align-items-start">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Frameworks</h5>
                            <p class="card-text"> React, Angular, Vue.js, Svelte—pick your weapon and build amazing UIs for your website.</p>
                            {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
               <div class="col-xl-4 col-md-6">
                        <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">CSS Preprocessors </h5>
                            <p class="card-text">Bored with basic CSS?<br/>Use Sass, PostCSS, and more. Level up your styling game.</p>
                            {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Git</h5>
                            <p class="card-text"> Continue your development journey,Git your code together! Explore Git,GitHub and collaboration workflows.</p>
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
Ready to embark on your frontend adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring frontend developers! </h2>
    </div>
  )
}