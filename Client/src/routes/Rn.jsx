import React from 'react'
import "../css/Ferm.css"
import myimage from "../img/img16.png"
import img20 from "../img/img20.jpg"
export default function ReactN() {
  return (
    <div>
      <h1> React Native Roadmap</h1>
      <div className='container'>
            <img src={myimage} alt="My Image" className='img-fluid align-items-center mx myimgb'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                    Welcome to the exciting world of development using React native! As a developer, you’ll be the architect of delightful user experiences, shaping how  applications look, feel, and interact. Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is React Native?</h2>
                    <h2 className='contentferm'>
                    React Native is an open-source JavaScript framework for mobile application development that allows developers to build natively-rendered mobile apps for iOS and Android using a single codebase. It is based on Facebook's React library and enables the creation of apps for web, iOS, and Android platforms. React Native uses JSX, a combination of JavaScript and XML, and acts as a bridge connecting native APIs with mobile UI components, allowing developers to write code once for both iOS and Android platforms.<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of mastering React Native. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <img src={img20} alt="My Image" className='img-fluid align-items-center mx myimgrm'/>
            <div className='container-fluid'>
            <div className="container2 m-5">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6 ">
                    <div class="card">
                      
                        <div class="card-body">
                            <h5 class="card-title">Environment Setup</h5>
                            <a class="card-text alpha" type="button" href="https://reactnative.dev/docs/environment-setup">Learn how to set up the environment for React Native development, including setting up iOS and Android environments </a></div></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">HTML BASICS</h5>
                            <a class="card-text alpha" type="button" href="/notes/HTML.pdf" target="_blank">Learn to structure information using semantic HTML tags and start your development journey.</a></div></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">CSS</h5>
                            <a class="card-text alpha" type="button" href="/notes/CSS_Complete_Notes.pdf" target="_blank">The stylistic wizardry. Dive into layouts, responsive design and CSS frameworks to style your webpage. </a>
                            
                        </div>
                    </div>
                </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        
                        <div class="card-body">
                            <h5 class="card-title">JavaScript & ES6</h5>
                            <p class="card-text">Understand the basics of JavaScript and ES6, which are essential for React Native development.</p>
                            
                        </div>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="/notes/JS.pdf" target="_blank">Javascript</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://www.w3schools.com/js/js_es6.asp" target="_blank">ES6</a>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                            <a className="card-text alpha" type="button" href="https://www.w3schools.com/REACT/"> Learn the fundamentals of React, as React Native is based on React principles.</a>
                            {/* <a href="https://www.google.com/"><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                    
                </div>
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Node.Js</h5>
                            <a className="card-text alpha" type="button" href="https://www.w3schools.com/nodejs/"> Learn the fundamentals of Node.Js and It's Architecture along with npm. </a>
                            {/* <a href="https://www.google.com/"><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                    
                </div>
                
                <div className="row align-items-start">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">React Native</h5>
                            <p class="card-text">  Dive into React Native, learning its core components, props, and how to write custom modules</p>
                            {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://reactnative.dev/docs/intro-react-native-components" target="_blank">Components</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://legacy.reactjs.org/docs/components-and-props.html" target="_blank">Props</a>
                        <a class="btn btn-outline-light m-3 alpha card-text" type="button" href="https://reactnative.dev/docs/native-modules-intro" target="_blank">Custom Modules</a>
                    </div>
                </div>
               <div class="col-xl-4 col-md-6">
                        <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Debugging </h5>
                            <a className="card-text alpha" type="button" href="https://reactnative.dev/docs/debugging"> Learn how to debug React Native apps using various tools
</a>
                            {/* <a href="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Styling</h5>
                            <a className="card-text alpha" type="button" href="https://blog.logrocket.com/react-native-styling-tutorial-examples/"> Understand how to style in React Native and make creative UI Design for your application.</a>
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
Ready to embark on your Application Development adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this Introduction to create an Inviting and Informative roadmap page for aspiring  developers! </h2>
    </div>
  )
}